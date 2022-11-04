const { StatusCodes } = require('http-status-codes')
const { readFileSync } = require('fs')
const quotes = JSON.parse(readFileSync("quote/quotes.json", "utf8"))

const quote = async (req, res) => {
    const idx = Math.floor(Math.random() * quotes.length)
    return res.status(StatusCodes.OK).json(quotes[idx])
}

module.exports = {
    quote,
}
