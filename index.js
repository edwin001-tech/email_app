// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

 SENDGRID_API_KEY=process.env;

const msg = {
  to: ['briankathukya2000@gmail.com'], // replace these with your email addresses
  from: 'Edwin <edwinshitakwa8@gmail.com>',
  subject: 'Hey man',
  text: 'tsetse fly,tsetse fly testing this app',
  html: '<p>tsetse fly,tsetse fly testing this app</p>',
};

sgMail.sendMultiple(msg).then(() => {
  console.log('emails sent successfully!');
}).catch(error => {
  console.log(error);
});