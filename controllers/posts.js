const User = require("../models/user");
const Post = require("../models/post");
// const post = require("../models/post");


module.exports = {
  index,
  new: newPost,
  show,
  create,
  delete: deletePost
  }

  function index(req, res) {
    Post.find({}, function(err, posts) {
      res.render("posts", {title: "POSTS", posts});
      // console.log(posts);
    });
  }

  // function show(req, res) {
  //   Post.findById(req.params.id, function(err, post) {
  //       if(err) return res.redirect('/posts'); 
  //       res.render('posts/show', {post})
  //     })
  //  };

  async function show(req, res) {
    const post = await Post.findById(req.params.id).populate('user').exec();
    res.render('posts/show', {post})
  }
  
function newPost (req, res) {
    res.render("posts/new", {title: "New  Post"});
  }

  function create (req, res)  {
    req.body.user = req.user._id;
    const post = new Post(req.body).populate('user').exec();
    post.save(function(err) {
      if(err){
        console.log(err);
        return res.redirect("/posts/new");
      }
      console.log(post);
      res.redirect("/posts")
    })
  };

  function deletePost (req, res) {
    Post.findById(req.params.id).then(function(post){
      post.remove()
      .then(function(){
        res.redirect('/posts');
      })
      .catch(function(err){
        return next(err);
      })
    })  
  }


   
