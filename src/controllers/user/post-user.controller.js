const mongoose = require('mongoose');
const { User } = require('../../models/user');
const Utils = require('../../utils/response');
const ResponseBody = new Utils();
const validationErr = mongoose.Error.ValidationError;
const errrrr = new validationErr(this);
const postUser = async (req, resp) => {
    const body = req.body;
    const postUser = new User({
        name: body.name,
        address: body.address,
        organization: body.organization
    });
    console.log('ini ya =====', typeof(errrrr));
    try {
        await postUser.save();
        resp.send(ResponseBody.success('Berhasil menambah data'));
    } catch (error) {
        console.log('error', error.errors);
        resp.statusCode = 500;
        resp.send(error.errors);
    }
}

module.exports = postUser;