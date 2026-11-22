import { useEffect, useRef } from 'react';

export function CyberGridShader() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const gl =
      canvas.getContext('webgl', { alpha: true, antialias: false }) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) return;

    const syncSize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(syncSize) : null;
    resizeObserver?.observe(canvas);
    syncSize();

    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
        vec2 st = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
        vec3 col = vec3(0.048, 0.052, 0.072);

        float y_warp = st.y + 0.62;
        if (y_warp < 0.0) {
          float depth = -1.0 / y_warp;
          vec2 grid = fract(vec2(st.x * depth, depth * 0.45 + u_time * 0.25)) - 0.5;
          float line = smoothstep(0.045, 0.0, abs(grid.x)) + smoothstep(0.045, 0.0, abs(grid.y));
          col += vec3(0.55, 0.18, 0.92) * line * (0.12 / depth);
        }

        for (float i = 0.0; i < 6.0; i++) {
          float angle = i * 1.05 + u_time * 0.18;
          vec2 pos = vec2(
            sin(angle) * (0.45 + sin(i + u_time * 0.15) * 0.2),
            cos(angle * 1.2) * (0.55 + cos(i * 1.4 + u_time * 0.18) * 0.25)
          );
          float dist = length(st - pos);
          float glow = 0.012 / (dist + 0.004);
          vec3 pColor = mix(vec3(0.65, 0.24, 1.0), vec3(0.0, 0.85, 0.96), sin(i + u_time * 0.5) * 0.5 + 0.5);
          col += pColor * glow * 0.24;
        }

        float radial = length(st);
        col += vec3(0.52, 0.12, 0.92) * exp(-radial * 2.3) * 0.18;
        col += vec3(0.0, 0.78, 0.92) * exp(-length(st - vec2(0.35, -0.35)) * 2.8) * 0.12;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');

    let rafId = 0;
    const render = (t: number) => {
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, prefersReducedMotion ? 1.5 : t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(0);
    } else {
      rafId = requestAnimationFrame(render);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full opacity-55"
    />
  );
}
