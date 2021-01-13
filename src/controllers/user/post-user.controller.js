const postUser = (req, resp) => {
    console.log(req.body);
    resp.send('oke');
}

module.exports = postUser;