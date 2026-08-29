const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// This tells the server what to say when you visit it
app.get('/', (req, res) => {
  res.send('Hello! My server is running perfectly.');
});

// This starts the server so it listens for visitors
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
