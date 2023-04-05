function getSessionUser(req, res, next) {
    res.locals.username = req.session.username
    next()
}

export { getSessionUser }
