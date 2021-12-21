const Post = require("../models/post");


module.exports = {
    create,
    };

function create(req, res) {
    Post.findById(req.params.id, function(err, post){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        let post = new Post(req.body);
        post.comments.push(req.body);
        post.save(function(err){
            if(err) {
                console.log(err);
                return res.redirect('/posts');
            }
            res.redirect('/posts')
        })
    })

} 