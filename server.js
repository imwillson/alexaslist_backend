var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

/* Configure app to use bodyParser which will let us get data from POST */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/* Set the port */
var port = process.env.PORT || 8080;

var router = express.Router();

/* Middleware for all reqs */
router.use(function (req, res, next) {
    console.log(req.method + ' is occurring.');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', ['GET', 'PUT', 'POST', 'DELETE']);
    next();
});

/* Routes for our API */
// ========================================== //
router.use('/items', require('./controllers/items.controller'));

// ========================================== //

/* Register our routes here which will all be prefixed with /api */
app.use('/api', router);

/* Start the server */
app.listen(port);
console.log('Alexaslist server starting on port ' + port + '...');
