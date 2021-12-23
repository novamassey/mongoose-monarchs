const Post = require("../models/post");


module.exports = {
    create,
    delete: deleteComment
};

function create(req, res) {
    Post.findById(req.params.id, function (err, post) {
        console.log(post);
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        post.comments.push(req.body);
        post.save(function (err) {
            if (err) console.log(err);
            res.redirect(`/posts/${post._id}`);
        })
    })
}

function deleteComment(req, res) {
    Post.findOne({ "comments._id": req.params.id })
        .then(function (post) {
            const comment = post.comments.id(req.params.id);
            if (!comment.user.equals(req.user._is)) return res.redirect(`posts/${posts._id}`);
            comment.remove();
            post.save()
                .then(function () {
                    res.redirect(`posts/${posts._id}`)
                })
                .catch(function (err) {
                    return next(err);
                })
        })
}
