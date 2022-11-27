const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express() //new server

require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL).catch(
    error => console.log(error)
)

require('./models/users')

app.use(cors()) //check cors allow origin

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/ping',function(req, res, next){ // 3 param next = รับตัวต่อไปทำงาน
    res.status(200).send('PONG!');
});

app.use('/api', require('./routes'))

const server = app.listen( 5000, function(){
    console.log('Listening on port ' + server.address().port);
})

