const UserMongo = require('./mongodb')
const bcrypt = require('bcryptjs')

const createUserMongo = async (username, password) => {
    const userMongo = await UserMongo.create({
        "username": username,
        "password": password
    })
    return userMongo
}

const populateUser = async (user, userMongo) => {
    user.username = (await userMongo).username
    user.password = (await userMongo).password
    user._id = (await userMongo)._id
}

const encript = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}
class User {
    constructor() {
    }
    async create(username, password) {
        const userMongo = createUserMongo(username, await encript(password))
        if (userMongo) {
            await populateUser(this, userMongo)
        }
    }
    static async findOne({ username }) {
        const user = new User()
        try {
            const userMongo = await UserMongo.findOne({ username })
            if (userMongo) {
                await populateUser(user, userMongo)
            } else {
                return null
            }
        } catch (error) {
            console.log(error)
        }
        return user
    }

    async comparePassword(password) {
        const match = bcrypt.compare(password, this.password)
        return match
    }
}

module.exports = User
