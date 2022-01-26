const Project = require("../models/project.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Tutorial
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
  });

  // Save Tutorial in the database
  Project.create(project, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Project.",
      });
    else res.send(data);
  });
};

exports.read = (req, res) => {
  Project.read(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Project with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Project with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Project.update(
    req.params.id,
    new Project(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Project with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Project with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Project.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Project with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Project with id " + req.params.id,
        });
      }
    } else res.send({ message: `The Project was deleted successfully!` });
  });
};

exports.getAll = (req, res) => {
  const title = req.query.title;

  Project.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};
