let mongoose = require('mongoose')

let UsersSchema = new mongoose.Schema({
    userName: mongoose.Schema.Types.String,
    fName:mongoose.Schema.Types.String,
    lName: mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String,
    urlProfile: mongoose.Schema.Types.String,
})



mongoose.model('Users', UsersSchema)