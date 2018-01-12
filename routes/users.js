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

/*
localhost:5000/users (GET) => fetches the entire database
localhost:5000/users/4 (GET) => gets the user with an _id of 4
            (POST) => adds a user object
          /4  (DELETE) => removes a user with an _id of 4
*/

module.exports = router;