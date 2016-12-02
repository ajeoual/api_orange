var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var http = require('http');

app.use(express.static(__dirname+'/client'));

app.use(bodyParser.json());

User = require('./models/user');

http.createServer(app).listen(3000, 'localhost');

console.log('Running on port 3000');

//Connect to mongoose

mongoose.connect( 'mongodb://localhost/bddOrange', function(err) {

  if (err) console.log(err);

  });

var db = mongoose.connection;

app.get('/', function(req, res){

    res.send('Please use /clients');

});

app.get('/clients', function(req, res){

    User.getUsers(function(err, users){

        if(err){

            throw err;

        }

        res.json(users);

    });

});

app.get('/clients/:_id', function(req, res){

    User.getUserById(req.params._id, function(err, user){

        if(err){

            throw err;

        }

        res.json(user);

    });

});

app.get('/clients/:_id/identity', function(req, res){

    User.getUserIdentityById(req.params._id, function(err, user){

        if(err){

            throw err;

        }

        res.json(user);

    });

});

app.get('/clients/:_id/vod', function(req, res){

    User.getUserVodById(req.params._id, function(err, user){

        if(err){

            throw err;

        }

        res.json(user);

    });

});

app.get('/clients/:_id/home', function(req, res){

    User.getUserHomeById(req.params._id, function(err, user){

        if(err){

            throw err;

        }

        res.json(user);

    });

});

app.get('/clients/:_id/networks', function(req, res){

    User.getUserNetworksById(req.params._id, function(err, user){

        if(err){

            throw err;

        }

        res.json(user);

    });

});

app.get('/clients/:_id/phoneplan', function(req, res){

    User.getUserPhonePlanById(req.params._id, function(err, user){

        if(err){

            throw err;

        }

        res.json(user);

    });

});

//app.listen(3000);
