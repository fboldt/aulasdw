const { readUsers, writeUsers } = require('../db/controller')

const setUser = async (username, password) => {
    const users = readUsers()
    users.push({"username": username, "password": password})
    return writeUsers(users)
}

const getPass = (username) => {
    const users = readUsers()
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