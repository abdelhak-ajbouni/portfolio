import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer')

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const mailData = {
      from: req.body.email,
      to: MAIL_ADDRESS,
      subject: `[abdelhak-ajbouni.github.io] Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:${req.body.email}</p>`
    }

    // TODO: set sendMail types
    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        console.log(err)
        res.status(500).json({ success: false, message: 'cannot send email', error: err })
      } else {
        console.log(info)
        res.status(200).json({ success: true, message: 'email sent successfully', data: info })
      }
    })
  } else {
    // Handle any other HTTP method
    res.status(404).json({ message: 'Not Found' });
  }
}