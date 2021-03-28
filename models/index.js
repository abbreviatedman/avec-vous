const mongoose = require("mongoose");
const { User, UserSchema } = require("./User");
const { Story, StorySchema } = require("./Story");
const { Sentence, SentenceSchema } = require("./Sentence");
const { Invite, InviteSchema } = require("./Invite");

mongoose.connect("mongodb://localhost:27017/avec-vous", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Mongo is _listening_"));

module.exports = {
  User,
  UserSchema,
  Story,
  StorySchema,
  Sentence,
  SentenceSchema,
  Invite,
  InviteSchema,
};
