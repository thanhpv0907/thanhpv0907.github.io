// Simple Express mock server for testing contact form
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body || {};
  console.log('Received contact:', { name, email, subject, message });

  if (!name || !email || !message) {
    return res.status(400).json({ status: 'error', message: 'Missing required fields' });
  }

  // Simulate async work (e.g., sending email)
  setTimeout(() => {
    res.json({ status: 'success' });
  }, 500);
});

app.get('/', (req, res) => res.send('Mock server running'));

app.listen(port, () => console.log(`Mock server listening on http://localhost:${port}`));
