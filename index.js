// product/index.js

// http://stackoverflow.com/questions/5778245/expressjs-how-to-structure-an-application

// | my-application
// | -- app.js
// | -- config/
//      | -- environment.js
//      | -- routes.js
// Here's my code:

//app.js

var express = require('express');
var app = module.exports = express.createServer();

require('./config/environment.js')(app, express);
require('./config/routes.js')(app);

app.listen(3000);


//config/environment.js
module.exports = function(app, express){
    app.configure(function() {
    app.use(express.logger());
    });

    app.configure('development', function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
    });

    app.configure('production', function() {
    app.use(express.errorHandler());
    });
};
config/routes.js

module.exports = function(app) {
    app.get('/', function(req, res) {
    res.send('Hello world !');
    });
};



