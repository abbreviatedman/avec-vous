const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.json({ name: "Hello, world" }));

app.listen(PORT);
