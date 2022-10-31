function validatePost(req, next, res) {
    console.log("validate Posts")
    let result =
        typeof (req.body.captainName) == string &&
        typeof (req.body.title) == string &&
        typeof (req.body.post) == string &&
        typeof (req.body.mistakesWereMadeToday) == Boolean &&
        typeof (req.body.daysSinceLastCrisis) == number

    if (result) {
        return next()
    } else {
        res
            .status(400)
            .send(`Oops, post format is Wrong`);
    }


}

module.exports = validatePost