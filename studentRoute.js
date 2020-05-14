const express = require('express');
const studentRoutes = express.Router();

let Student = require('./studentModel');


//store
studentRoutes .route('/add').post(function(req,res){
    let student = new Student(req.body);
    student.save()
    .then(student =>{
        res.status(200).json({'student':'student is added sucessfully'});
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});

//get data

studentRoutes.route('/').get(function (req,res){
    Student.find(function (err, student){
        if(err)
            console.log(err);
        else{
            res.json(student);
        }
    });
});

studentRoutes.route('/edit/:id').get(function (req,res) {
    let id = req.params.id;
    Student.findById(id, function(err,student) {
        res.json(student);
    });
});

studentRoutes.route('/update/:id').get(function (req,res){
   Student.findById(req.params.id, function (err, student){
        if(!student)
            res.status(404).send("data is not found");
        else{
            student.first_name = req.body.first_name;
            student.last_name = req.body.last_name;
            student.index_no= req.body.index_no;
            student.age= req.body.age;
            student.grade= req.body.grade;
            
            student.save().then(student => {
                res.json('Update Complete');
            })
                .catch(err=>{
                    res.status(400).send("unable to update database");
                });
        }
    });
});
 
//delete

studentRoutes.route('/delete/:id').get(function (req,res){
    Student.findByIdAndRemove({_id:req.params.id},function (err, student){
        if(err)res.json(err);
        else res.json('Successfully removed');  
    });
});

module.exports = studentRoutes;
