var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rashedulislam072@gmail.com',
    pass: 'yavwokhqrrbqdfir'
  }
});

var mailOptions = {
  from: 'rashedulislam072@gmail.com',
  to: 'rashedruetece16@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});