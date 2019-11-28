var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cors = require('cors')


const User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * from users', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

router.get('/report', function(req, res, next) {
	res.locals.connection.query('SELECT * from users', function (error, results, fields) {
	   if(error) throw error;
	   res.send(JSON.stringify(results));
   });
});
router.get('/stat', function(req, res, next) {
	res.locals.connection.query('SELECT * from route', function (error, results, fields) {
	   if(error) throw error;
	   res.send(JSON.stringify(results));
   });
});



router.post('/edit', function(req, res, next) {
    res.locals.connection.query('update users set username = '+req.body.username+', UserEmail = '+req.body.UserEmail+' where UserID = '+req.body.UserID+'', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

router.post('/delete', function(req, res, next) {
    res.locals.connection.query('DELETE from users where UserID = '+req.body.UserID+'', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});



process.env.SECRET_KEY = 'secret'

router.post('/register', (req, res) => {
	const today = new Date()
	const userData = {
	  StaffFName: req.body.StaffFName,
	  StaffLName: req.body.StaffLName,
	  StaffEmail: req.body.StaffEmail,
	  password: req.body.password,
	  created_at: today
	}	
  
	User.findOne({
	  where: {
		StaffEmail: req.body.StaffEmail
	  }
	})
	  //TODO bcrypt
	  .then(user => {
		if (!user) {
		  bcrypt.hash(req.body.password, 10, (err, hash) => {
			userData.password = hash
			User.create(userData)
			  .then(user => {
				res.json({ status: user.StaffEmail + 'Registered!' })
			  })
			  .catch(err => {
				res.send('error: ' + err)
			  })
		  })
		} else {
		  res.json({ error: 'User already exists' })
		}
	  })
	  .catch(err => {
		res.send('error: ' + err)
	  })
  })
  
  router.post('/login', (req, res) => {
	User.findOne({
	  where: {
		StaffEmail: req.body.StaffEmail
	  }
	})
	  .then(user => {
		if (user) {
		  if (bcrypt.compareSync(req.body.password, user.password)) {
			let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
			  expiresIn: 1440
			})
			res.send(token)
		  }
		} else {
		  res.status(400).json({ error: 'User does not exist' })
		}
	  })
	  .catch(err => {
		res.status(400).json({ error: err })
	  })
  })
  
  router.get('/profile', (req, res) => {
	var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  
	User.findOne({
	  where: {
		StaffID: decoded.StaffID
	  }
	})
	  .then(user => {
		if (user) {
		  res.json(user)
		} else {
		  res.send('User does not exist')
		}
	  })
	  .catch(err => {
		res.send('error: ' + err)
	  })
  })


module.exports = router;
