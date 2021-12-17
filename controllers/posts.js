const User = require("../models/user");
const Post = require("../models/post");


module.exports = {
  index,
  };

  function index(req, res) {
    Post.find({}, function(err, posts) {
      res.render("posts", {title: "POSTS", posts});
    });
  }