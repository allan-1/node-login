const express = require("express").Router;
const Router = express();

const {notAuth, authenticated} = require('../Controllers/controlls')

Router.get("/login", notAuth, (req, res)=>{
    res.render("login");
})
Router.get("/register", notAuth, (req, res)=>{
    res.render("register");
})
Router.get("/", authenticated, (req, res)=>{
    res.render('index', {fname: req.user.fname, lname: req.user.lname})
})

module.exports = Router