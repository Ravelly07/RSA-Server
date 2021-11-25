const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
//conf del puerto
app.set('port',5000);
app.use(morgan('dev'));//eliminar despues de debug
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Routes
app.get('/', (req, res) => {
    res.send('Back-end');
});

exports.default = app;