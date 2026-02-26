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
        console.warn('⚠️  Transporter verification failed. Emails will not be sent until credentials are fixed in .env:', error.response || error.message);
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
    const subject = `Regarding Application/Enquiry - ${interest}`;
    const text = `Dear Sir\n\nSubject: ${subject}\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterested In: ${interest}\nMessage: ${message}\n\nThank you`;
    sendMail(subject, text, res, name, email);
});

app.post('/api/admission', (req, res) => {
    const { name, phone, email, course } = req.body;
    const subject = `Regarding Course Purchase - ${course}`;
    const text = `Dear Sir\n\nSubject: ${subject}\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nCourse: ${course}\n\nThank you`;
    sendMail(subject, text, res, name, email);
});

app.post('/api/meeting', (req, res) => {
    const { name, phone, email, interest, message } = req.body;
    const subject = `Regarding Scheduling a Meeting - ${interest}`;
    const text = `Dear Sir\n\nSubject: ${subject}\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterested In: ${interest}\nMessage: ${message}\n\nThank you`;
    sendMail(subject, text, res, name, email);
});

app.post('/api/csr', (req, res) => {
    const { from_name, organization, from_email, phone, interest, message } = req.body;
    const subject = `Regarding CSR/Partnership - ${interest}`;
    const text = `Dear Sir\n\nSubject: ${subject}\n\nName: ${from_name}\nOrganization: ${organization}\nEmail: ${from_email}\nPhone: ${phone}\nInterest Area: ${interest}\nMessage: ${message}\n\nThank you`;
    sendMail(subject, text, res, from_name, from_email);
});

app.get('/', (req, res) => {
    res.send('Backend server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
