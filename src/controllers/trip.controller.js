const data = require("../response_1723288694944.json");
const Realdata = require("../response_1723288694950.json");

const Specs = async (req, res) => {
  res.send(JSON.stringify(data));
  res.end();
};

const Trip = async (req, res) => {
  res.send(JSON.stringify(Realdata));
  res.end();
};

module.exports = { Specs, Trip };
