import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';
import renderEmailHtml from './renderEmailHtml';

(async () => {
  const { MAILTRAP_USER, MAILTRAP_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: MAILTRAP_USER,
      pass: MAILTRAP_PASSWORD,
    }
  });

  const { html, text } = await renderEmailHtml({ templateId: 'basic' });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text, // plain text body
    html,
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);

})().catch(console.error);

