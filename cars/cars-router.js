const router = require("express").Router();
const db = require("../data/db_config")

// display cars
router.get("/", (req, res) => {
    db("cars")
      .then(cars => {
        res.status(200).json(cars);
      })
      .catch(() => {
        res
          .status(500)
          .json({ message: "Could not retrieve the list of vehicles" });
      });
  });

// add car
router.post('/', (req, res) => {
    const addCar = req.body;
    db('cars')
      .insert(addCar, 'id')
      .then(addCar => {
        res.status(201).json(addCar);
      })
      .catch(err => {
        res.status(500).json({ message: 'error adding car to db' });
      });
  });

  module.exports = router;
