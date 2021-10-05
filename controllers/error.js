exports.get404 = ((req, res, next) => {                                      //error page code
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});