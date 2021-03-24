const mongoose = require("mongoose");
const express = require("express");
const app = express();
const Story = require("./models/Story");
require('./models/index')

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/stories", (req, res) => {
  Story.find({}, (error, stories) => {
    if (error) {
      console.error(error);
    }

    res.json(stories);
  });
});

app.listen(PORT);
