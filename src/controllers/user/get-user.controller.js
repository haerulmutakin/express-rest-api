const Utils = require('../../utils/response');
const ParamsUtil = require('../../utils/generate-params');

const ParamGenerator = new ParamsUtil();
const ResponseBody = new Utils();
const { User } = require('../../models/user');

const getUser = async (req, resp) => {
    const params = ParamGenerator.generateParams(req.query);
    try {
        let user = [];
        let dataCount = 0;
        await User.countDocuments({}, (_, result) => {
            dataCount = result;
        });
        if (params.requestType === 'pagination') {
            await User.find().limit(params.limit).skip(params.offset).then(result => {
                user = result;
            });
        } else {
            user = await User.find();
        }
        resp.send(ResponseBody.list(user, dataCount));
    } catch (error) {
        console.log(error);
        resp.statusCode = 500;
        resp.send(ResponseBody.error());
    }
}

module.exports = getUser;
