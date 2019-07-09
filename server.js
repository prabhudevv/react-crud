const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(bodyParser.json());
const port = 8008

//defining routes
const movies = require('./routes/api/v1/movies');

server.use('/api/v1/movies', movies);

const db_config = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db_config, { useNewUrlParser: true }).then(() => {
    console.log('connected')
}).catch(err => console.log(err))

//connect to port
server.listen(port, () => {
    console.log(`port number ${port}`);
})