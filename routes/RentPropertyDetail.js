const router = require("express").Router();
let RentPropertyDB = require("../models/RentPropertyDetail.js");

router.route("/").get((req, res) => {
  RentPropertyDB.find()
    .then((RentProperty) => res.json(RentProperty))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/property-details-rent/:id").get(function (req, res) {
  const id = req.params.id;
  RentPropertyDB.findById(id, function (err, property) {
    if (!property) {
      return res.json("Property not found :(").end();
    }
    return res.json(property).end();
  });
});

router.route("/add-prop-admin").post(async (req, res) => {
  try {
    const data = req.body;
    const newRentProperty = new RentPropertyDB(data);
    const savedRentProperty = await newRentProperty.save(); // Save the document to the database
    res.json(savedRentProperty);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
    console.error(error);
  }
});

router.route("/filter").post(async (req, res) => {
  try {
    const { City } = req.body;

    try {
      const filteredRooms = await RentPropertyDB.find({ City: City });
      res.json(filteredRooms);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  } catch (err) {
    console.error(err);
  }
});

// Search and filter properties
router.post("/search/properties", async (req, res) => {
  try {
    const { keyword } = req.query;

    let query = RentPropertyDB.find();

    if (keyword) {
      query = query.or([{ City: { $regex: keyword, $options: "i" } }]);
    }

    const properties = await query.exec();
    res.json(properties);
    console.log(properties);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/new-homes", async (req, res) => {
  try {
    const newHomes = await RentPropertyDB.find()
      .sort({ _id: -1 })
      .limit(2)
      .exec();

    res.json(newHomes);
    console.log(newHomes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/sortedData/:id", async (req, res) => {
  const { sort } = req.query;

  let sortedData;

  try {
    switch (sort) {
      case "1":
        sortedData = await RentPropertyDB.find().sort({ Price: -1 });
        break;
      case "2":
        sortedData = await RentPropertyDB.find().sort({ Price: 1 });
        break;
      case "3":
        sortedData = await RentPropertyDB.find().sort({ AreaSqFt: -1 });
        break;
      case "4":
        sortedData = await RentPropertyDB.find().sort({ AreaSqFt: 1 });
        break;
      default:
        sortedData = await RentPropertyDB.find();
        res.json(sortedData);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
