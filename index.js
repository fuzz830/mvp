// Index.js the whole shebang
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
var path = require('path');
var fs = require('fs');
var Datastore = require('nedb');
var morgan = require('morgan');  // Setup Logging

var logger = require(path.join(__dirname, '/config/logConfig.js'));

// setup the express app
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.disable('x-powered-by');

// Setup static files
app.use(express.static(path.join(__dirname, "/public")));

// db setup
var dbPath = path.join(__dirname, '/data/mvp.db');
var db = new Datastore({filename: dbPath, autoload: true, timestampData: true});


// Setup the access log
app.use(morgan('combined', {stream: logger.stream}));

// setup moment
var moment = require('moment');
moment().format();

// Default template
var indexTemplate = path.join(__dirname, 'public/partials/home.html');
app.get('/', function(req, res) {
    res.sendFile(indexTemplate);
});

// get all the notes
app.get('/notes', function(req, res) {
    db.find({}, function(err, docs) {
        if (err) {
            console.log("There are no notes in the database");
        }
        res.send(docs);
    });
});

// Example note schema
// {
//     "type": "note",
//     "title": "a sample title",
//     "tags": ["an", "array", "of", "tags"],
//     "body": "markdown fomatted body"
// }

// create a new note
app.post('/note', function(req, res) {
  // create an array with the tags separated out into an []
    var splitTags = req.body.tags.split(/[ ,]+/);

  // assemble the data to be saved to the database
    var saveData = {type: "note",
                   title: req.body.title,
                   tags: splitTags,
                   body: req.body.body};

    console.log(saveData);

    db.insert(saveData, function(err, newDoc) {
        if (err) {
            console.log('db insert failed');
        }
        console.log('successfully saved');
    });
    res.redirect('/');
});

app.put('/note/:id', function(req, res) {
    // req.params.id should give you note/:id  maybe
    console.log("Hey this is a put request!");
});

app.listen(PORT, function() {
    logger.appLog.log('info', 'Started on 3000!');
});
