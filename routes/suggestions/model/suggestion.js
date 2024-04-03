// suggestionSchema
// - `title` - should be a string, lowercase, unique, required
// - `author` - should be a string, lowercase
// - `suggestion` - should be a string, lowercase and required
// - `likes` - should be a number and default to 0
// - `anonymous` - should be a boolean
// - `timeCreated` - should be a date with default `Date.now`

const mongoose = require('mongoose')

const suggestionSchema = new mongoose.Schema({
    title: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        lowercase: true,
    },
    suggestion: {
        type: String,
        lowercase: true,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    anonymous: {
        type: Boolean,
    },
    timeCreated: { 
        type: Date, 
        default: Date.now 
    }
})

module.exports = mongoose.model('suggestion', suggestionSchema)