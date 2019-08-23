const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-58fg7.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
server.use(express.json());
server.use(cors());
server.use(routes);

server.listen(3333);

//Para não precisar reiniciar yard add nodemon -D depois iniciar pelo script yarn.dev do package.json
//M - Model, V - View, C - Controller

