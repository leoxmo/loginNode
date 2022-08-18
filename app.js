// invocar a express
const express = require('express');
const app = express();

//setemos urlencoded para capturar los datos del formulario 
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// incocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path: './env/.env'});

//el directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname +'/public'));
 
//establecemos el motor de plantillas ejs 
app.set('view engine','ejs');

//invocamos a bcrypts
const bcryptjs = require('bcryptjs');

//variables de session
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave:'true',
    saveUninitialized:true
}));

//Invocamos al modulo de conexion de la BD
const connection = require('./database/db')

//establecer las rutas
app.get('/',(req,res)=>{
    res.render('index',{msg:'esto es un mensaje de node'});
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.get('/register',(req, res)=>{
    res.render('register');
})


app.listen(3000,(req, res)=>{
    console.log('SERVER RUNNING IN http://localhost:3000');
})