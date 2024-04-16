const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);

mongoose
    .connect('mongodb+srv://capt:Siva29@cluster0.un2nbsb.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB!'))
    .catch(error => console.error('Failed to connect to MongoDB', error));

// Error handling middleware
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});


