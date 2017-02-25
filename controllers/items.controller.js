var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');
mongoose.connect('mongodb://localhost:27017/alexaslist')

/* Create an Item (accessed at POST http://localhost:8080/api/items) */
router.post('/', function(req, res) {
    var item = new Item();
    item.name = req.body.name;
    item.categories = req.body.categories;
    item.description = req.body.description;
    item.price = req.body.price;
    item.owner = req.body.owner;
    item.location = req.body.location;

    // Save the item and check for err
    item.save(function(err) {
        if (err) res.send(err);

    res.json(item);
    });
});

/* Get all Items (accessed at GET http://localhost:8080/api/items) */
router.get('/', function(req, res) {
    Item.find(function(err, items) {
        if (err) res.send(err);

        res.json(items);
    });
}); 

module.exports = router;