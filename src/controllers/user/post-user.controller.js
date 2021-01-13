const { User } = require('../../models/user');
const postUser = (req, resp) => {
    const body = req.body;
    const postUser = new User({
        name: body.name,
        organization: body.organization
    });
    console.log(postUser);
    postUser.save().then(() => {
        resp.send('Berhasil menambah data pengguna')
    })
}

module.exports = postUser;