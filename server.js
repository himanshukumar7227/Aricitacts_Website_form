import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3000;

// Generated API Key
const API_KEY = 'acf30e30e78401e4876d6534e9add756f5060b5c9621d8e9cd183afdddad6655';

app.use(cors());
app.use(express.json());

// Create reusable transporter object for Gmail SMTP
let transporter;

async function setupEmail() {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'himanshukumar8051084723@gmail.com',
      pass: 'cxzmmlbqzekwnvqm',
    },
  });
  console.log('Gmail SMTP configured and ready.');
}

setupEmail();

app.post('/submit', async (req, res) => {
  // Check if transporter is ready
  if (!transporter) {
    return res.status(500).json({ error: 'Email service not initialized' });
  }

  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ error: 'Invalid API key' });
  }

  const { name, email, message, phone } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  // Send email
  try {
    const mailOptions = {
      from: '"Contact Form" <noreply@example.com>',
      to: 'himanshukumar8051084723@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }

  res.json({ success: true, message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});