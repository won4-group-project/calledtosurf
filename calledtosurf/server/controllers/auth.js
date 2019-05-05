
module.exports = {
    login: (req, res, next) => {
        req.app.get('db').users.find_user()
        .then(user =>{res.status(200).send(user)})
        .catch(err => {
            res.status(500).send({
              errorMessage: "Oops! Something went wrong!"
            });
            console.log(err);
          });
      },

    signUp: (req, res, next) => {
        let newUser = {};
        const {first_name, last_name, email, phone, user_password } = req.body;
        req.app.get('db').users.create_user()
        .then( newUser =>{
            newUser = {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: user_password
            }
        })
        res.status(200).send({success: 'true'})
    }
}