// business.route.js

const express = require('express');
const teacherRoutes = express.Router();

// Require Business model in our routes module
let Teacher = require('../models/teacherModel');

// Defined store route
teacherRoutes.route('/add').post(function (req, res) {
  let teacher = new Teacher(req.body);
  teacher.save()
    .then(teacher => {
      res.status(200).json({'teacher': 'teacher added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
teacherRoutes.route('/').get(function (req, res) {
    Teacher.find(function(err, teacher){
    if(err){
      console.log(err);
    }
    else {
      res.json(teacher);
    }
  });
});

// Defined edit route
teacherRoutes.route('/editTeachers/:id').get(function (req, res) {
  let id = req.params.id;
  Teacher.findById(id, function (err, teacher){
      res.json(teacher);
  });
});

//  Defined update route
teacherRoutes.route('/update/:id').post(function (req, res) {
    Teacher.findById(req.params.id, function(err, teacher) {
    if (!teacher)
      res.status(404).send("data is not found");
    else {
        teacher.f_name = req.body.f_name;
        teacher.l_name = req.body.l_name;
        teacher.subject = req.body.subject;
        teacher.district = req.body.district;

        teacher.save().then(teacher => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
teacherRoutes.route('/delete/:id').get(function (req, res) {
    Teacher.findByIdAndRemove({_id: req.params.id}, function(err, teacher){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = teacherRoutes;
