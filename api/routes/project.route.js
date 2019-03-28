const express = require('express');
const app = express();
const projectRoutes = express.Router();

let Projects = require('../models/Projects');

projectRoutes.route('/add').post(function (req, res){
   let projects = new Projects(req.body);
   projects.save()
           .then(projects => {
             res.status(200).json({'projects': 'Project added successfully'});
          })
           .catch(err => {
             res.status(400).send("Unable to save to database");
           });
});

projectRoutes.route('/').get(function (req, res) {
  Projects.find(function (err, projects){
  if(err){
    console.log(err);
  }
  else {
    res.json(projects);
  }
});
});

module.exports = projectRoutes;
