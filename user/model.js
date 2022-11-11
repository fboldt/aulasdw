const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username (de 5 ate 20 caracteres)'],
        maxlength: 20,
        minlength: 5,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'password deve ser maior que 3 caracteres'],
        minlength: 3,
    }
})

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (password) {
    const match = await bcrypt.compare(password, this.password)
    return match
}

module.exports = mongoose.model('User', UserSchema)
