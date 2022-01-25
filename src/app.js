const express = require("express");
const cors = require("cors");
const Projects = require('./routes/projects');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use('/', Projects);

app.listen(app.get("port"), () => {
  console.log("Starting server node");
});
