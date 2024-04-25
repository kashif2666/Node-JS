const nodemailer = require("nodemailer");

const sendMail=async(req,res)=>{
  let testAccount = await nodemailer.createTestAccount();
  
   // connect with smtp server
   const transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'kassandra.anderson93@ethereal.email',
      pass: 'raV33Sy7aQwBbYNMTF'
    }
});

const info = await transporter.sendMail({
    from: '"Kashif Anwar 👻" <kashif.jsr2666@gmail.com>', // sender address
    to: "kashifjsr7@gmail.com, kraza3181@gmail.com", // list of receivers
    subject: "Hello Message", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
res.json(info);
};

module.exports=sendMail;