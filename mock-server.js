// Simple Express mock server for testing contact form
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.get('/api/contact', (req, res) => {
  res.send('This endpoint expects a POST request with JSON body: { name, email, message }');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  console.log('Received contact:', { name, email, subject, message });

  if (!name || !email || !message) {
    return res.status(400).json({ status: 'error', message: 'Missing required fields' });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender address (Note: Gmail might override this with auth user)
    to: process.env.EMAIL_USER, // Receiver (yourself)
    replyTo: email,
    subject: subject || 'New Contact from Portfolio',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong></p>
           <p>${message.replace(/\n/g, '<br>')}</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.json({ status: 'success', message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send email' });
  }
});

app.get('/', (req, res) => res.send('Mock server running'));

app.listen(port, () => console.log(`Mock server listening on http://localhost:${port}`));
