const router = require('express').Router()
const mongoose = require('mongoose')
const User = mongoose.model('Users')

// requirement method :
// - [post] => updateUser : when user have sign-up, api will get data from fronends to backends by api
// - [post] => editProfile : when user edit profile will get data from database and change
// - [get] => getProfile : when user Login, then data will sent to fronends
// - []

router.get('/test1', function(req, res, next){
    res.status(201).send(
        {"test":"testtest"}
    ); //status create
});

router.post('/updateUser', function(req, res, next){
    var user = new User();

    user.userName = req.body.username;
    user.fname = req.body.fname;
    user.lname = req.body.lname;
    user.password = req.body.password;
    user.urlProfile = req.body.urlProfile;
    
    user.save().then(function(){
        return res.json({user})
    })
})

// router.post('/updateProfile',function(req, res, next){
//     User.find().then(function(user){
//         if (user == req){
//             return res.send(user)
//         }
//     })
// })

router.get('/user', function(req, res, next){
    User.find().then(function(user){
        return res.send(user)
    })
    // User.findById(req._id).then(function(user){
    //     if(!user){ return res.sendStatus(401); }
    //     return res.json({use})
    // })
})

// router.post('/users/register', function(req, res, next){
//     if()
// }
// )

module.exports = router
