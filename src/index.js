// Require
const express= require ('express');
const morgan= require('morgan');
const path =require ('path');

const {mongoose}=require('./database');
const app =express();

//settings
app.set('port', process.env.PORT || 3000);
//Midelwares
app.use(morgan('dev'));//ver peticiones del servidor en la consola
app.use(express.json());//datos json
//app.use(express.urlencoded({ extended: false }));

//Routes
//app.use('/',require('./routes/task.routes'));
app.use('/api/tasks', require('./routes/task.routes'));


//Static Files
app.use(express.static(path.join (__dirname, 'public'))); 
//Starting Server

app.listen(app.get('port'), ()=>{
    console.log(`Server on port => ${app.get('port')}`);
});