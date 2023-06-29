const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 8000;
require("dotenv").config();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://real-estate-v1.onrender.com"],
    credentials: true,
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);

app.use(express.json());

const DB_uri = "mongodb+srv://Klausss:9022173886@cluster0.weitk1g.mongodb.net/";
mongoose.connect(DB_uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB connection established sucessfully");
});

const AdminRouter = require("./routes/Admin");
const AboutUsRouter = require("./routes/AboutUs");
const TeamRouter = require("./routes/Team");
const GalleryRouter = require("./routes/Gallery");
const VideoRouter = require("./routes/Video");
const MapsRouter = require("./routes/Maps");
const RentPropertyDetailRouter = require("./routes/RentPropertyDetail");
const SalePropertyDetailRouter = require("./routes/SalePropertyDetail");
const SubmittedPropertyRequestsRouter = require("./routes/SubmittedPropertyRequests");
const BlogRouter = require("./routes/Blogs");

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.use("/Admin", AdminRouter);
app.use("/AboutUs", AboutUsRouter);
app.use("/Team", TeamRouter);
app.use("/Gallery", GalleryRouter);
app.use("/Video", VideoRouter);
app.use("/Maps", MapsRouter);
app.use("/RentPropertyDetail", RentPropertyDetailRouter);
app.use("/SalePropertyDetail", SalePropertyDetailRouter);
app.use("/SubmittedPropertyRequests", SubmittedPropertyRequestsRouter);
app.use("/blog", BlogRouter);

app.listen(port, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 8000");
  }
});
