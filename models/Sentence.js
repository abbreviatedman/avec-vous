const mongoose = require("mongoose");

const SentenceSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    default: "",
  },

  user: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true,
  },
});

const Sentence = mongoose.model("Sentence", SentenceSchema);

module.exports = { Sentence, SentenceSchema };
