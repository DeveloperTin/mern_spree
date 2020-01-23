const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const products = require("./routes/api/products");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("Mongo ATLAS connected!"))
  .catch(err => console.log(err));

app.use("/api/products", products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
