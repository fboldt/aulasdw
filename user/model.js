const UserMongo = require('./mongodb')

const createUserMongo = async (username, password) => {
    const userMongo = await UserMongo.create({
        "username": username,
        "password": password
    })
    return userMongo
}
class User {
    constructor(username, password) {
        this.username = username
        const userMongo = createUserMongo(username, password)
        this._id = userMongo._id
    }
    static async findOne({ username }) {
        return UserMongo.findOne({ username })
    }
}

module.exports = User
