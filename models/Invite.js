const mongoose = require("mongoose");

const InviteSchema = new mongoose.Schema({
  story: {
    type: mongoose.ObjectId,
    required: true,
  },

  user: {
    type: mongoose.ObjectId,
    required: true,
  },
});

const Invite = mongoose.model("Invite", InviteSchema);

module.exports = Invite;
