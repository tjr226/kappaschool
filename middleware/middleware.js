module.exports = {
    validateUser: function (req, res, next) {
        const userInfo = req.body;
        if (
            userInfo === undefined ||
            userInfo.email === undefined ||
            userInfo.password === undefined
        ) {
            console.log('validate user middleware failed');
            return res.status(400).json({ errorMessage: "Please provide credentials." });
        } else {
            console.log('validate user middleware successful');
            next();
        }
    },
}
