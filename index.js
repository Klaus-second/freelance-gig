const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port 8000");
    }
})