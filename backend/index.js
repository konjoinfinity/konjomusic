const express = require("express");
const app = express();
const cors = require("cors");
const parser = require("body-parser");
const methodOverride = require("method-override");
const passport = require("./config/passport")();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(methodOverride("_method"));
app.use(passport.initialize());

const songController = require("./controllers/song");

app.use("/songs", songController);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`Running on PORT: ${app.get("port")}`);
});
