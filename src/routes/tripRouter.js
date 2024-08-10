const express = require("express");
const control = require("../controllers/trip.controller");

const router = express.Router();

router.post("/api/aermes/get_planned_activities", control.Specs);
router.post("/api/aermes/get_travel_specs", control.Trip);
module.exports = router;
