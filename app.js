'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;

const indexRoute = require('./data/routes/index');

app.use(cookieParser());

//using body-parser to get POST request data from request
app.use(bodyParser.urlencoded({
    limit: '10mb',
    extended: true
}));
app.use(bodyParser.json({ limit: '10mb', extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to Home!'
}));

app.use('/v1', indexRoute);

// Error Handling Middleware
app.use((req, res, next) => {
    const error = new Error();
    error.status = 404;
    error.message = 'Not Found';
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ message: err.message || 'Internal server error' });
});

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.'
}));

app.listen(port, () => {
    console.log(`Express server is running on port: ${port}`);
});
