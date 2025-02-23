import { Resend } from 'resend';

const resend = new Resend("re_jfcLx8jw_Nqn5wKAjbHvwLdmp5bXq67qY");

export async function POST(req: Request) {
  try {
    const { lastName, firstName, company, department, email, message } = await req.json();

    if (!email || !message) {
      return new Response(JSON.stringify({ error: "Email and message are required." }), { status: 400 });
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
