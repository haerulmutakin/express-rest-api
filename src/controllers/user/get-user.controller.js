const Utils = require('../../utils/response');
const ResponseBody = new Utils();
const { User } = require('../../models/user');

const getUser = async (req, resp) => {
    const {name} = req.query;
    const userData = await User.findOne({name: name});
    resp.send(ResponseBody.detail(userData));
}

module.exports = getUser;
