// Index.js the whole shebang
const express = require('express');
const bodyParser = require('body-parser');
const marked = require('marked');
const PORT = 3000;
var morgan = require('morgan');
var path = require('path');
var Datastore = require('nedb');
var extend = require('util')._extend;

var util = require('util');
var fs = require('fs');
var FileStreamRotator = require('file-stream-rotator');


// setup the express app
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.disable('x-powered-by');


// Setup static files
app.use(express.static(path.join(__dirname + "/public")));


// db setup
var db = new Datastore({filename: '/Users/michaelmathes/Documents/Programming/mvp/data/mvp.db', autoload: true, timestampData: true});


// // setup logging
// // var winLog = require(__dirname + '/config/winLog.js');
// // var logsDirectory = __dirname + '/logs';

// fs.existsSync(logsDirectory) || fs.mkdirSync(logsDirectory);

// // create rotating file structure for logs
// var accessLogStream = FileStreamRotator.getStream({
//     filename: logsDirectory + "/access-%DATE%.log",
//     frequency: "daily",
//     verbose: false,
//     date_format: "YYYY-MM-DD"
// });

// //Setup the access log
// app.use(morgan('combined', {stream: accessLogStream}));


// setup moment
var moment = require('moment');
moment().format();




// Default template
app.get('/', function(req, res) {
    res.sendFile('/Users/michaelmathes/Documents/Programming/mvp/public/partials/home.html');
});

// get all the notes
app.get('/notes', function(req, res) {
    db.find({}, function(err, docs) {
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
    var saveData = {"type": "note",
                    "title": req.body.title,
                    "tags": splitTags,
                    "body": req.body.body};

    console.log(saveData);

    db.insert(saveData, function(err, newDoc) {
        console.log('successfully saved');
    });
    res.redirect('/');
});


app.put('/note/:id', function(req, res)  {
    //req.params.id should give you note/:id  maybe
    console.log("Hey this is a put request!");
});



app.listen(PORT, function() {
    console.log("MVP: Started on 3000");
//    winLog.log('info', 'Started on 3000!');
});
