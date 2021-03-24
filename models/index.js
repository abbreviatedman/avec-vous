const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/avec-vous", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Mongo is _listening_"));
