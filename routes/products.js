const express = require("express");
const router = express.Router();

const {fullBodyWorkoutData, getAllProductsTesting} = require("../controllers/products");
router.route("/").get(fullBodyWorkoutData);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;