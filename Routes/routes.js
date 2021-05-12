const express = require("express").Router
const router = express();
const {Bcrypt} = require("../Controllers/controlls")
const passport = require("passport");


router.post("/logout", (req, res)=>{
    req.logOut()
    res.redirect('/login')
})

router.post('/register', Bcrypt, (req, res)=>{

})

router.post('/login', passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}))

module.exports = router