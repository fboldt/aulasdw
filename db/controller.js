const fs = require('fs')

const readUsers = () => {
    return JSON.parse(fs.readFileSync("db/users.json", "utf8"))
}

const writeUsers = (users) => {
    let success = false
    fs.writeFile('db/users.json', JSON.stringify(users), 'utf8', function (err) {
        if (err) {
            console.log(err)
            success = false
        } else {
            success = true
        }
    });
    return success
}

module.exports = {
    readUsers,
    writeUsers,
}
