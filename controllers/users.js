const User = require("../models/user");
const Post = require("../models/post");


module.exports = {
    show,
    edit,
    update,
    index
}

function show(req, res) {
    User.findById({ _id: req.params.id }, function (err, user) {
        if (err) return res.redirect('/posts');
        res.render('users/show', { user })
    })
};
function edit(req, res) {
    User.findById({ _id: req.params.id }, function (err, user) {
        // if (err)  res.redirect(`users/${user._id}`);
        res.render('users/edit', { user });
    })
}

function update(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, user) {
        console.log(user);
        if (err) res.redirect('/users/show');
        res.redirect('/users');
    })
}
function index(req, res) {
    User.find({}, function (err, users) {
        res.render('users/index', { users })
    })
}







