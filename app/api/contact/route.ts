import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { success: false, message: 'Invalid email address.' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return Response.json(
        { success: false, message: 'Message must be at least 10 characters.' },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
      return Response.json(
        { success: false, message: 'Contact form is not configured yet. Please try emailing directly.' },
        { status: 500 }
      );
    }

    // Send via Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Portfolio Message from ${name}`,
        from_name: name,
        reply_to: email,
        name,
        email,
        message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return Response.json({ success: true, message: 'Message sent successfully!' });
    } else {
      return Response.json(
        { success: false, message: result.message || 'Failed to send message.' },
        { status: 500 }
      );
    }
  } catch {
    return Response.json(
      { success: false, message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
