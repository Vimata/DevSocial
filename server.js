const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect database

connectDB();

//Init middleware

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

//Define routes

app.use('/api/users', require('./routes/api/users/register'));
app.use('/api/users', require('./routes/api/users/login'));
app.use('/api/users', require('./routes/api/users/users'));
app.use('/api/clubs/profile', require('./routes/api/clubs/clubprofile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
