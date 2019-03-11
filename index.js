const express = require("express");
const app = express();
const cors = require("cors");
const parser = require("body-parser");
const methodOverride = require("method-override");

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`Running on PORT: ${app.get("port")}`);
});
