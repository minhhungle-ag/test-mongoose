const express = require("express");

const router = express.Router();
const db = require("../Models/product");

router.get("/", async (req, res) => {
  const productList = await db.find();

  if (productList) {
    res.status(200).json({
      data: productList,
    });
  }
});

router.post("/", (req, res) => {
  const product = new db({
    name: req.body.name,
  });

  product
    .save()
    .then((result) => {
      res.status(201).json({
        message: "success",
        data: product,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        message: error.message,
      });
    });
});

module.exports = router;
