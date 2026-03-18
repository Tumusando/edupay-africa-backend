const express = require('express');
const app = express();

app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send("EduPay Africa Backend Running");
});

// Payment approval
app.post('/approve', (req, res) => {
  console.log("Payment approved:", req.body);
  res.json({ success: true });
});

// Payment completion
app.post('/complete', (req, res) => {
  console.log("Payment completed:", req.body);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
