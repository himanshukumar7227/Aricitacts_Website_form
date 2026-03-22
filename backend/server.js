import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const API_KEY = process.env.API_KEY;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

if (!API_KEY) {
  console.error('Missing required environment variable: API_KEY');
  process.exit(1);
}

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error('Missing required environment variables: EMAIL_USER and/or EMAIL_PASS');
  process.exit(1);
}

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', '*'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'x-api-key'],
  })
);
app.use(express.json());

let transporter;

function initTransporter() {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  transporter.verify((err, success) => {
    if (err) {
      console.error('Nodemailer transporter verification failed:', err);
      process.exit(1);
    } else {
      console.log('Nodemailer transporter successfully verified and ready.');
    }
  });
}

initTransporter();

app.post('/submit', async (req, res) => {
  if (!transporter) {
    console.error('Email transporter not initialized.');
    return res.status(500).json({ error: 'Email service not initialized' });
  }

  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== API_KEY) {
    console.warn('Unauthorized request: invalid x-api-key');
    return res.status(401).json({ error: 'Invalid API key' });
  }

  const { name, email, message, phone } = req.body;

  if (!name || !email || !message) {
    console.warn('Bad request: missing required fields', { name, email, message });
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const mailOptions = {
    from: `${EMAIL_USER}`,
    to: EMAIL_USER,
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h3>New Message from Contact Form</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Unable to send email', details: error?.message || 'unknown' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});