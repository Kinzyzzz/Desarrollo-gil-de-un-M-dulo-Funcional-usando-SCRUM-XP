const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});

module.exports = app;