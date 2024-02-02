//import nodemailer from 'nodemailer';
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export function generateOptions(start, end, field) {
    let range = Array.from({ length: end - start + 1 }, (_, index) => ({
        value: String(start + index),
        label: String(start + index)
    }))
    if (field === 'year') {
        range = range.reverse()
    }
    if (field === 'month') {
        range.forEach(opt => {
            opt.label = MONTHS[opt.label - 1]
            opt.value = MONTHS[opt.label - 1]?.slice(0,3)
        })
    }
    return range
}

//const nodemailer = require("nodemailer")

// export const sendVerificationCode = async(to, code) => {
//     debugger
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'yuliyasukach123@gmail.com',  // Your Gmail email address
//             pass: 'AlesiaKazak123'   // Your Gmail password
//         }
//     });

//     const mailOptions = {
//         from: 'yuliyasukach123@gmail.com',  // Sender's email address
//         to: to,
//         subject: '111 is you Twitter verification code',
//         html: ``
//     };

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log('Email sent:', info.response);
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }

// const htmlContent = `
//     <html>
//     <head>
//         <style>
//             body {
//                 font-family: 'Arial', sans-serif;
//                 background-color: #f4f4f4;
//                 color: #333;
//             }
//             h1 {
//                 color: #007bff;
//             }
//             // Add your additional styles here
//         </style>
//     </head>
//     <body>
//         <h1>Hello!</h1>
//         <p>This is an example email with HTML and inline CSS.</p>
//     </body>
//     </html>
// `