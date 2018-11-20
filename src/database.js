const mongoose = require('mongoose');
const URI='mongodb://localhost/tasks';

mongoose.connect (URI,{ useNewUrlParser: true })
    .then(db => console.log('database conected'))
    .catch(err =>console.log(err));

module.exports=mongoose; 