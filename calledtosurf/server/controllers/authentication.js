
module.exports = {

    signUp: (req, res, next) => {
        res.status(200).send({success: 'true'});
    },

    login: (req, res, next) => {
        res.status(200).send({success: 'true'})
    }
}