const data = require("../Specifications.json");
const Realdata = require("../TripDetails.json");

const Specs = async (req, res) => {
  res.send(JSON.stringify(data));
  res.end();
};

const Trip = async (req, res) => {
  res.send(JSON.stringify(Realdata));
  res.end();
};

module.exports = { Specs, Trip };
