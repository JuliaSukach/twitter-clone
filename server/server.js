const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3002

const emailTemplate = require('./utils/emailContent')
const { code } = require('./utils/utils')

require('dotenv').config()
const emailUser = process.env.EMAIL_USER
const emailPassword = process.env.EMAIL_PASSWORD

// Middleware to parse JSON requests
app.use(cors())
app.use(bodyParser.json())

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, this is your Express server!')
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

async function sendHtmlEmail(to) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: emailUser,  // Your Gmail email address
            pass: emailPassword   // Your Gmail password
        }
    })

    const mailOptions = {
        from: 'info@julia.com',  // Sender's email address
        to: to,
        subject: `${code} is your X verification code`,
        html: emailTemplate(code)
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log('Email sent:', info.response)
        return info
    } catch (error) {
        console.error('Error sending email:', error)
    }
}

app.post('/send-email', async (req, res) => {
    try {
        const { to } = req.body
        await sendHtmlEmail(to)
        res.status(200).send({ code })
    } catch (error) {
        console.error('Error sending email:', error)
        res.status(500).send('Internal Server Error')
    }
})
