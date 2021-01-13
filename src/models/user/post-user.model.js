const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    organization: String
});

module.exports = mongoose.model('User', schema);