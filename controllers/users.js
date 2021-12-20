const User = require("../models/user");
const Post = require("../models/post");
const user = require("../models/user");

module.exports = {
    show,
    edit,
    update
}

function show(req, res) {
    User.findById({_id: req.params.id}, function(err, user) {
        if(err) return res.redirect('/posts'); 
        res.render('users/show', {title: "User Profile"})
    })
};

// function edit(req, res){
//     User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, user) {
//         if (err)  res.redirect('/posts');
//         res.render(`users/${user._id}`);
//         })
// }

function edit(req, res){
    User.findById({_id:req.params.id}, function(err, user) {
        console.log(user);
        if (err)  res.redirect(`users/${user._id}`);
        res.render('/users/edit');
        })
}

function update(req, res) {
    // User.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, function(err, user) {
    //     if (err) res.redirect(`users/${user._id}`);
    //     res.render('/users/show');
    // })
}



