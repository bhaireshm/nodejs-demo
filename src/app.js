import express from 'express';

const app = express();

// * Configurations
// ...

// * Routes
app.get('/users?', (req, res) => {
  res.send({ name: "Harry" });
});

app.listen(3000, function () {
  console.log('listening on http://localhost:3000');
});