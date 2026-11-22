export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  topic: string;
  message: string;
}

export interface ContactValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactSubmitResult {
  status: 'sent' | 'not_configured' | 'error';
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(payload: ContactFormPayload): ContactValidationErrors {
  const errors: ContactValidationErrors = {};

  if (!payload.name.trim() || payload.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  if (!payload.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(payload.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!payload.subject.trim() || payload.subject.trim().length < 3) {
    errors.subject = 'Please enter a brief subject (at least 3 characters).';
  }

  if (!payload.message.trim() || payload.message.trim().length < 10) {
    errors.message = 'Please include a message (at least 10 characters).';
  }

  return errors;
}

/**
 * Contact submission adapter.
 *
 * To enable real form delivery via Formspree, Resend proxy, or a custom backend endpoint:
 * set VITE_CONTACT_ENDPOINT in your environment (e.g. https://formspree.io/f/your-id).
 *
 * When no endpoint is configured, this function intentionally returns `not_configured`
 * rather than faking a successful email delivery.
 */
export async function submitContactInquiry(
  payload: ContactFormPayload
): Promise<ContactSubmitResult> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

  if (!endpoint || !endpoint.trim()) {
    return {
      status: 'not_configured',
      message:
        'Direct web-form delivery is not connected to an email backend yet. Use the direct email action below to open your mail client with this message pre-filled.',
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name.trim(),
        email: payload.email.trim(),
        subject: `[${payload.topic}] ${payload.subject.trim()}`,
        topic: payload.topic,
        message: payload.message.trim(),
      }),
    });

    if (!response.ok) {
      return {
        status: 'error',
        message:
          'The message endpoint returned an error. Please try again or email Anmol directly.',
      };
    }

    return {
      status: 'sent',
      message: 'Your message has been delivered. Thank you for reaching out!',
    };
  } catch {
    return {
      status: 'error',
      message:
        'Unable to reach the contact endpoint right now. You can email Anmol directly using the button below.',
    };
  }
}

export function buildMailtoHref(recipientEmail: string, payload: ContactFormPayload): string {
  const subject = encodeURIComponent(
    `[${payload.topic}] ${payload.subject.trim() || 'Portfolio Inquiry'}`
  );
  const body = encodeURIComponent(
    `Hi Anmol,\n\n${payload.message.trim()}\n\n— ${payload.name.trim() || 'Visitor'} (${payload.email.trim() || 'no email provided'})`
  );
  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}
