
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

    signup: (req, res, next) => {
      const User = req.app.get('db');
      const email = req.body.email;
      // const password = req.body.user_password;
      
       // See if a user with the given email exists
      User.users.find_user(email)
      .then(userEmail => {
       
        if(!userEmail){
         return res.json({success: 'success'})
          // return res.status(200).send({
          //   success: "success"
          // })
        } 
        if(userEmail) {
         return res.json({error: 'email already exists'})
        //  return res.status(422).send({
        //     error: "email already in use"
        //   })
        }
      })
      // .catch( err => {
      //   res.status(500).send({
      //     err
      //   });
      // })
         
      // If a user with email does exist, return an error
     
      // If a user with an email does not exist, create and save user record.

         
      // Respond to request indicating the user was created
    }
}