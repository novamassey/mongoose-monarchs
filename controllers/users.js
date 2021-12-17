const User = require("../models/user");
const Post = require("../models/post");
const user = require("../models/user");

module.exports = {
    show
}

function show(req, res) {
    User.findById({_id: req.params.id}, function(err, user) {
        if(err) return res.redirect('/posts'); 
        res.render('users/show', {title: "User Profile"})
    })
};


