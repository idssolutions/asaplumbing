// https://app.sendgrid.com/guide/integrate/langs/nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID);

export default function handler(req: any, res: any) {
    let { name, email, message } = req.body;

    const msg = {
        to: process.env.TO_EMAIL,
        from: process.env.FROM_EMAIL,
        subject: name + " sent you a message from your site",
        text: message + "\n\n-" + name,
        cc: email,
    };
    sgMail
        .send(msg)
        .then(() => {
            console.log("email sent");
            res.send("Email sent");
        })
        .catch((error: any) => {
            res.status(400).send(error.response.body[0]?.message);
        });
}
