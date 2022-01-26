const express = require("express");
const router = express.Router();

const projects = require("../controllers/projectController");

router.post("/projects", projects.create);
router.get("/projects/:id", projects.read);
router.delete("/projects/:id", projects.delete);
router.get("/projects/", projects.getAll); //Get all elements on the table project

module.exports = router;
