const bcrypt = require('bcrypt');
const User = require("../Models/model")


async function Bcrypt(req, res, done){
    const hashedPasswd = await bcrypt.hash(req.body.passwrd, 10);
    User.findOne({email: req.body.email}).then(user =>{
        if(user){
            res.redirect('/register');
            return(done(null, false, {message: "Email already registered"}))
        }else{
            const user = new User({
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                password: hashedPasswd,
            })
            user.save()
            res.redirect("/")
        }
    })
}

// check authenticated

function authenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

function notAuth(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}

module.exports = {
    Bcrypt,
    authenticated,
    notAuth
}