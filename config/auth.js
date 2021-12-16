module.exports  = function(req, res, next) {
    //if there is user, keep the pipeline flowing
    if (req.isAuthenticated()) return next();
    //if not, redirect to login page
    res.redirect('/auth/google');
}