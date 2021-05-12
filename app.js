// dependencies
const express = require("express");
const app = express()
const port = process.env.PORT || 3000;
const dotenv = require("dotenv").config()
const session = require("express-session");
const passport = require("passport");
const flash = require('express-flash');

// routes
const routes = require("./Routes/routes")
const homeRoute = require('./Routes/home')
require('./Controllers/passport')(passport)

// ejs
app.set('view engine', 'ejs');

// static file load
app.use(express.static('public'))

// express body-parser middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// express session
app.use(session({
    secret: process.env.secret_key,
    resave: false,
    saveUninitialized: false
}));

// passport config
app.use(passport.initialize())
app.use(passport.session())

// flash messages
app.use(flash())

// my routes
app.use("/route", routes)
app.use('/', homeRoute)


app.listen(port, ()=>{
    console.log(`Server started on port: ${port}`);
})