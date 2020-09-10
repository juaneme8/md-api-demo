const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(userRoutes);

app.listen(3001, () => {
	console.log('Escuchando en Puerto 3001');
});
