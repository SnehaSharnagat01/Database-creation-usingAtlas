let mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: Number,
    password: String,
  },
  {
    timestamps: true,
  },
);

                            //  "collectionName - isme user ka users, post ka posts, person ka people autonatically ho jata hai",SchemaName,"collectionName - Exactly yahi aaega"
let userModel = mongoose.model("user", userSchema, "Sneha");
module.exports = userModel;
