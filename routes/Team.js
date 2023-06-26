const router = require("express").Router();
let TeamDB = require("../models/Team.js");

router.route("/").get((req, res) => {
  TeamDB.find()
    .then((Team) => res.json(Team))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
