export default function (req, res) {
  require("dotenv").config();
  console.log(process.env.pw, process.env.email);
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.pw,
    },
    secure: true,
  });
  const mailData = {
    from: req.body.email,
    to: process.env.email,
    subject: `Contact Form Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    // if (err) {
    //   res.status(400).json({ message: JSON.stringify(err) });
    // }
    if (err === null) {
      res.status(200).json({ message: "Email sent successfully!" });
    } else {
      res
        .status(400)
        .json({ err: "There was an error when sending your email." });
    }
  });
}
