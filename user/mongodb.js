const mongoose = require('mongoose')

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
        required: [true, 'password deve ser maior ou igual a 3 caracteres'],
        minlength: 3,
    }
})

module.exports = mongoose.model('User', UserSchema)
