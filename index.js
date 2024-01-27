const express = require("express");
const bodyParser = require("body-parser");
const categoryRouter = require("./src/routes/category");
const mooviesRouter = require("./src/routes/moovies");


const app = express();
app.use(bodyParser.json());

app.use("/category", categoryRouter);
app.use("/moovies", mooviesRouter);

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});