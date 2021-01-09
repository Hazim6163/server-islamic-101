const index = async (req, res) => {
    if (!req.session || !req.session.userCard) {
        res.redirect('/user/login');
        return;
    }
    res.render('index', { title: 'Home', userCard: req.session.userCard, loggedIn: true})
}


module.exports = {
    index
}
