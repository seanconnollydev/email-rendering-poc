import nodemailer from 'nodemailer';
import renderEmailHtml from './renderEmailHtml';

(async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "347ed0dcd4f7cb",
      pass: "c3c3e1930c86d3"
    }
  });

  const html = await renderEmailHtml({ templateId: 'basic' });

  // setup email data with unicode symbols
  const mailOptions = {
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html,
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions)

  console.log("Message sent: %s", info.messageId);

})().catch(console.error);

