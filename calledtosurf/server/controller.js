module.exports = {
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance.product
      .get_all_product()
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
    const { product_id } = req.params;

    dbInstance
      .get_product_by_id(product_id)
      .then(shoes => res.status(200).send(shoes))
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
