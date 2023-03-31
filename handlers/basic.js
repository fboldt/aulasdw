const handlers = {}

handlers.home = (req, res) => { res.render("home") }

handlers.sobre = (req, res) => { res.render("sobre") }

handlers.notFound = (req, res) => { res.render("404") }

handlers.serverError = (err, req, res, next) => { res.render("500") }

export default handlers
