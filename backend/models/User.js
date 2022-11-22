const mongoose = require("../db/connection");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: String,
  password: String
});

UserSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

UserSchema.method("comparePassword", function(password, dbpassword) {
  console.log(password, dbpassword);
  if (bcrypt.compareSync(password, dbpassword)) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
});

mongoose.model("User", UserSchema);

module.exports = mongoose;