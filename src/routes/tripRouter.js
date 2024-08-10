const express = require("express");
const control = require("../controllers/trip.controller");

const router = express.Router();

router.post("/post", control.mult);
router.post("/post/:id", control.single);

module.exports = router;
