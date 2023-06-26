const router = require("express").Router();
const AboutUsDB = require("../models/AboutUs");

router.route("/").get((req, res) => {
  AboutUsDB.find()
    .then((AboutUs) => res.json(AboutUs))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
