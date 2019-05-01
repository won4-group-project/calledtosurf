module.exports = {
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_all_product()
      .then(shoes => res.status(200).send(shoes))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong!"
        });
        console.log(err);
      });
    console.log("showing all the images");
  }
};
