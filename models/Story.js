const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "",
  },

  admin: {
    type: mongoose.ObjectId,
    required: true,
  },

  collaborators: [
    {
      type: mongoose.ObjectId,
      required: true,
    },
  ],

  turn: {
    type: Number,
    required: true,
    default: 0,
  },

  isOpen: {
    type: Boolean,
    required: true,
    default: true,
  },

  sentences: {
    type: [String],
    required: true,
    default: [],
  },
});

const Story = mongoose.model("Story", StorySchema);

module.exports = Story;
