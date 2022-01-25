const Project = require("../models/project.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {    
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Tutorial
    const project = new Project({
      title: req.body.title,
      description: req.body.description
    });

    // Save Tutorial in the database
    Project.create(project, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Project."
        });
        else res.send(data);
    });
};

exports.delete = (req, res) => {
  Project.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Project with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Project with id " + req.params.id
        });
      }
    } else res.send({ message: `The Project was deleted successfully!` });
  });
};