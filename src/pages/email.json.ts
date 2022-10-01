import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer'

const { NODE_ENV, MAIL_ADDRESS, MAIL_PASSWORD } = process.env
const isDev = NODE_ENV === 'development'
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
  // if (request.headers.get("Content-Type") === "application/json") {
  const body = await request.json();
  const emailData = {
    from: body.email,
    to: MAIL_ADDRESS,
    subject: `[abdelhak-ajbouni.github.io] Message From ${body.name}`,
    text: body.message + " | Sent from: " + body.email,
    html: `<div>${body.message}</div><p>Sent from:${body.email}</p>`
  }

  // TODO: set sendMail types
  transporter.sendMail(emailData, function (err: any, info: any) {
    if (err) {
      console.log(err)
      return new Response(
        JSON.stringify({ success: false, message: 'cannot send email', error: err }),
        { status: 400 }
      )
    } else {
      console.log(info)
      return new Response(
        JSON.stringify({ success: true, message: 'email sent successfully', data: info }),
        { status: 200 }
      )
    }
  })
  // }
  return new Response(null, { status: 400 });
}
