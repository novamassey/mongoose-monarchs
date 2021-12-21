const Post = require("../models/post");
// const User = require("../models/user");

module.exports = {
    create,
    };

function create(req, res) {
    Post.findById(req.params.id, function(err, post){
        console.log(post);
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        post.comments.push(req.body);
        post.save(function(err){
            if(err) console.log(err);
            res.redirect(`/posts/${post._id}`);
     
        })
    })

} 

