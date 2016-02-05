const express = require('express');
const bodyParser = require('body-parser');
var Datastore = require('nedb');

// setup the express app
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// db setup
var db = new Datastore({filename: '/Users/michaelmathes/Documents/Programming/mvp/mvp.db', autoload: true});


app.get('/', function(req, res) {
    res.sendFile('/Users/michaelmathes/Documents/Programming/mvp/home.html');
});

app.get('/docs', function(req, res) {
    db.find({}, function(err, docs) {
        res.send(docs);
    });
});

app.post('/items', function(req, res) {
    db.insert(req.body, function(err, newDoc) {
        console.log('successfylly saved');
    });
    res.redirect('/');

});

app.listen(3000, function() {
    console.log("MVP: Started on 3000");
});
