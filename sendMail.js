require('dotenv').config();
const nodemailer = require('nodemailer');

const sendMail = (name, email, subject, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_ADDRESS,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.GMAIL_ADDRESS,
    to: process.env.DESTINATION_EMAIL_ADDRESS,
    subject,
    text: `${name} has messaged you from ${email}.

    ${message}
    `
  };

  return transporter.sendMail(mailOptions);
};

sendMail('ant', 'ant@ant.com', 'greeting', 'hello!')
  .then(() => console.log('success'))
  .catch(console.log);

module.exports = sendMail;
