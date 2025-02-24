import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
// const apiKey = functions.config().myconfig.resend_api_key;
// const resend = new Resend(apiKey);

export async function POST(req: Request) {
  try {
    const { lastName, firstName, company, department, email, message } = await req.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required." }), { status: 400 });
    }
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',  // Replace with your verified domain
      to: 'sajeel@buildmeapp.io',
      subject: 'New Inquiry Submission',
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Department:</strong> ${department || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data: response }), { status: 200 });
  } catch (error:any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
