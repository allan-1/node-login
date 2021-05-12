const mongoose = require('mongoose');
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/Database', 
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{
    console.log("Database started")
}).catch((e)=>{
    console.log(e);
});

const userSchema = new Schema({
    fname: String,
    lname: String,
    email: String,
    password: String
})

const User = mongoose.model('user', userSchema);

module.exports = User