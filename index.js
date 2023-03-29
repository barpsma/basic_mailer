require('dotenv').config()
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_AUTH,
        pass: process.env.USER_PASS,
    },
})

const mail = {
    from: process.env.USER_AUTH,
    to: process.env.TO,
    subject: 'hello lagi bro :D',
    text: 'kamu disana ga ya?',
}

transporter.sendMail(mail, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Email sent: ${info.response}`)
        res.send({
            status: 200
        })
    }
})