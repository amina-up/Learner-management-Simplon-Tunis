const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApprenantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

module.exports = Apprenant = mongoose.model("apprenant", ApprenantSchema);
