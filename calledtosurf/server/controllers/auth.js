
module.exports = {

    login: (req, res, next) => {
        const dbInstance = req.app.get("db");

        dbInstance.users.find_user()
        .then(user =>{res.status(200).send(user)})
        .catch(err => {
            res.status(500).send({
              errorMessage: "Oops! Something went wrong!"
            });
            console.log(err);
          });
      },

    signUp: (req, res, next) => {
        res.status(200).send({success: 'true'})
    }
}