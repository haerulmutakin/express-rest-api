const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String
    },
    address: String,
    organization: {
        type: String,
        required: [true, 'Parameter organisasi wajib diisi']
    }
});

module.exports = mongoose.model('User', schema);