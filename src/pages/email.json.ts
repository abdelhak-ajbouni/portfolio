import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer'

const { MODE, MAIL_ADDRESS, MAIL_PASSWORD } = import.meta.env
const isDev = MODE === 'development'
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: MAIL_ADDRESS,
    pass: MAIL_PASSWORD,
  },
  secure: true,
  logger: isDev,
});

export const post: APIRoute = async ({ request }) => {
  const body = await request.json();
  const emailData = {
    from: body.email,
    to: MAIL_ADDRESS,
    subject: `[abdelhak-ajbouni.com] Message From ${body.name}`,
    text: body.message + " | Sent from: " + body.email,
    html: `<div>${body.message}</div><p>Sent from:${body.email}</p>`
  }

  const info = await transporter.sendMail(emailData)

  if (info.rejected.length > 0) {
    console.error(info.rejected)
    return new Response(
      JSON.stringify({ success: false, message: 'cannot send email', error: info.rejected }),
      { status: 400 }
    )
  }

  console.log('Email sent - ', info.messageId)
  return new Response(
    JSON.stringify({ success: true, message: 'email sent successfully', data: info }),
    { status: 200 }
  )
}
