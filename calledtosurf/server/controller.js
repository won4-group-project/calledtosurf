module.exports = {
  getByMainCategory: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { mainCategory } = req.params;

    dbInstance.product
      .get_product_by_category(mainCategory)
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong!"
        });
        console.log(err);
      });
    console.log("showing all the images");
  },

  getByCategory: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { category } = req.params;

    dbInstance.product
      .get_product_by_subcategory(category)
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong!"
        });
        console.log(err);
      });
    console.log("showing all the images by category ");
  },

  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    //
    dbInstance.product
      .get_product_by_id(id)
      .then(product => res.status(200).send(product))
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
