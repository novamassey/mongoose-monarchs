const User = require("../models/user");
const Post = require("../models/post");


module.exports = {
  index,
  new: newPost,
  create
  };

  function index(req, res) {
    Post.find({}, function(err, posts) {
      res.render("posts", {title: "POSTS", posts});
    });
  }

  function newPost (req, res) {
    res.render("posts/new", {title: "New  Post"});
  }

  function create (req, res)  {
    const post = new Post(req.body);
    post.user = req.user._id;
    console.log(post);
    post.save(function(err) {
      if(err){
        console.log(err);
        return res.redirect("/posts/new");
      }
      console.log(post);
      res.redirect("/posts")
    })
  };