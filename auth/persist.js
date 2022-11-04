const fs = require('fs')

const setUser = async (username, password) => {
    const users = require('../db/users.json')
    users.push({"username": username, "password": password})
    fs.writeFile('db/users.json', JSON.stringify(users), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            console.log(err)
            return false;
        }
        console.log("JSON file has been saved.");
        return true
    });
}

const getPass = (username) => {
    const users = require('../db/users.json')
    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            return users[i].password
        }
    }
    return null
}

module.exports = {
    setUser,
    getPass,
}