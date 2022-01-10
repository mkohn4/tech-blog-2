const withAuth = (req,res, next) => {
    console.log(req.body);
    if(!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;