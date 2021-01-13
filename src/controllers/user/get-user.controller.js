const Utils = require('../../utils/response');
const ResponseBody = new Utils();
const userData = [
    {
        name: 'takin',
        organization: 'adl 1'
    },
    {
        name: 'takin',
        organization: 'adl 2'
    },
    {
        name: 'mutakin',
        organization: 'adl'
    },
];

const getUser = (req, resp) => {
    const param = req.query;
    const seledtedData = userData.find(item => item.name === param.username);
    if (seledtedData) {
        resp.send(ResponseBody.success(seledtedData));
    } else {
        resp.statusCode = 400;
        resp.send('data not found');
    }
}

module.exports = getUser;
