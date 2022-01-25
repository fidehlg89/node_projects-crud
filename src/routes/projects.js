const express = require('express');
const router = express.Router();

const projects = require('../controllers/projectController');
// Create a new Tutorial
router.post("/projects", projects.create);

router.delete("/projects/:id", projects.delete);
module.exports = router;