const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRouter = require("./routes/Router/product");

(async () => {
  await mongoose
    .connect(
      "mongodb+srv://haless132:producttest@cluster0.ivbmnnp.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("mongoose connected"))
    .catch((error) => console.log(error));
})();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/product", productRouter);

module.exports = app;
