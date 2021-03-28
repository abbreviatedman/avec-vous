const mongoose = require("mongoose");
const { SentenceSchema } = require("./Sentence");

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "",
  },

  admin: {
    type: mongoose.ObjectId,
    ref: "User",
    required: true,
  },

  collaborators: [
    {
      type: mongoose.ObjectId,
      ref: "User",
      required: true,
    },
  ],

  turn: {
    type: Number,
    required: true,
    default: 0,
  },

  isComplete: {
    type: Boolean,
    required: true,
    default: false,
  },

  isOpen: {
    type: Boolean,
    required: true,
    default: true,
  },

  sentences: {
    type: [SentenceSchema],
    required: true,
    default: [],
  },
});

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;
