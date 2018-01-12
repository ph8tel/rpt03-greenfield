const express = require('express');
const path = require('path');
const db = require('../database/index.js');
const router = express.Router();

router.get('/users', function(req, res, next){
	db.find({}, function(err, users){
		if(err){
			console.log('THERE WAS AN ERROR ', err)
			return;
		}
		res.json(users);
	})
	//async deathzone, anything palced here is undefined
})

router.get('/users/:id', function(req, res, next){
	db.findOne({_id: req.params.id}, function(err, users){
		if(err){
			console.log('THERE WAS AN ERROR ', err)
			return;
		}
		res.json(users);
	})
	//async deathzone, anything palced here is undefined
})

router.post('/users', function(req, res, next){
	var user = new db(req.body);
    db.findOne(req.body, function (err, success) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(success);
            if (success == null) {
                user.save(function (err, success) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                    else {
                        console.log("inserted");
                        console.log(success);
                        res.send("success");
                    }
                });
            } else {
                res.send("User already present");
            }
        }
    })
	//async deathzone, anything palced here is undefined
})

router.delete('/users/:id', function(req, res, next){
	db.remove({_id: req.params.id}, function(err, data){
		if(err){
			console.log('THERE WAS AN ERROR')
			return;
		}
		res.json('1')
	})
})
/*
localhost:5000/users (GET) => fetches the entire database
localhost:5000/users/4 (GET) => gets the user with an _id of 4
            (POST) => adds a user object
          /4  (DELETE) => removes a user with an _id of 4
*/

module.exports = router;