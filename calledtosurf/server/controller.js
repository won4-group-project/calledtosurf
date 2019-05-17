module.exports = {
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance.product
      .get_product_by_images()
      .then(shoes => res.status(200).send(shoes))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong!"
        });
        console.log(err);
      });
    console.log("showing all the images");
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance.product
      .get_product_by_id(id)
      .then(shoes => res.status(200).send(shoes))
      // .then(() => res.sendStatus(200))

      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
    console.log("showing image by id");
  }
};
