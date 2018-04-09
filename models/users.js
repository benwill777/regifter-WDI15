const mongoose = require('mongoose')
const Schema = require('../db/schema')

const User = mongoose.model('user', Schema.UserSchema)
module.exports = {
    User
}