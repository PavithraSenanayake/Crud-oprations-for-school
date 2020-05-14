const express = require('express');
const app = express();
const bodyPasrser = require('body-parser');
const PORT = 4000;
const cors = require('cors');


const mongoose = require('mongoose');
const config = require('./DB.js');
const studentRoute = require('./studentRoute');
const teacherRoute = require('./routes/teacherRoute');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser: true}).then(
    ()=> {console.log('Database is connected')},
    err => {console.log('cannot connect to database' + err)}
);

app.use(cors());
app.use(bodyPasrser.urlencoded({extended: true}));
app.use(bodyPasrser.json());
app.use('/student', studentRoute);
app.use('/teacher', teacherRoute);

app.listen(PORT, function(){
    console.log('Server is running on port :', PORT);
});

