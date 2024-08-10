const express = require("express");
const cors = require("cors");

const tripRouter = require("./src/routes/tripRouter");
const app = express();
app.use(express.json());

const PORT = 3000;
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", tripRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
