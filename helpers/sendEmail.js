const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const email = { ...data, from: 'mariya89y@gmail.com' };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
// const email = {
//   to: 'vetide1863@v1zw.com',
//   from: 'mariya89y@gmail.com',
//   subject: 'Text email',
//   html: ' <p><strong>Test email</strong> from localhost:4000</p>',
// };

// sgMail
//   .send(email)
//   .then(() => console.log('Email send success'))
//   .catch(error => console.log(error.massage));