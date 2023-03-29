const { Schema, model } = require('mongoose')

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let validatePassword = function(password) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return re.test(password)
}

const userSchema = new Schema (
    {
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail],
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address'],
        },
        password: {
            type: String,
            required: true,
            validate: [validatePassword],
            match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Please enter a password with at least 1 digit 1 letter and at least 8 charachters long'],
        }
    }
)

const User = model('user', userSchema)

module.exports = User