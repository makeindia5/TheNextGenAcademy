import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify Transporter
transporter.verify((error, success) => {
    if (error) {
        console.log('Error with transporter:', error);
    } else {
        console.log('Server is ready to send emails');
    }
});

// Helper function to send email
const sendMail = (subject, text, res, senderName, replyTo) => {
    const mailOptions = {
        from: `"${senderName}" <${process.env.EMAIL_USER}>`,
        to: process.env.RECEIVER_EMAIL,
        replyTo: replyTo,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: 'Error sending email' });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    });
};

// API Endpoints
app.post('/api/contact', (req, res) => {
    const { name, phone, email, interest, message } = req.body;
    const subject = `New Contact Form Submission from ${name}`;
    const text = `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Interested In: ${interest}
        Message: ${message}
    `;
    sendMail(subject, text, res, name, email);
});

app.post('/api/admission', (req, res) => {
    const { name, phone, email, course } = req.body;
    const subject = `New Admission Application from ${name}`;
    const text = `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Course: ${course}
    `;
    sendMail(subject, text, res, name, email);
});

app.post('/api/meeting', (req, res) => {
    const { name, phone, email, interest, message } = req.body;
    const subject = `New Meeting Scheduled by ${name}`;
    const text = `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Interested In: ${interest}
        Message: ${message}
    `;
    sendMail(subject, text, res, name, email);
});

app.post('/api/csr', (req, res) => {
    const { from_name, organization, from_email, phone, interest, message } = req.body;
    const subject = `New CSR Proposal Request from ${from_name}`;
    const text = `
        Name: ${from_name}
        Organization: ${organization}
        Email: ${from_email}
        Phone: ${phone}
        Interest Area: ${interest}
        Message: ${message}
    `;
    sendMail(subject, text, res, from_name, from_email);
});

app.get('/', (req, res) => {
    res.send('Backend server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
