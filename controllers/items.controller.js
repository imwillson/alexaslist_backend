var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/item');
mongoose.connect('mongodb://localhost:27017/alexaslist')

/* Create an Item (accessed at POST http://localhost:8080/api/items) */
router.post('/', function(req, res) {
    var item = new Item();
    item.id = req.body.id;
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

/* Get the Item with the id (accessed at GET http://localhost:8080/api/items/:id) */
router.get('/:_id', function(req, res) {
    Item.findOne({ id: req.params._id }, function(err, item) {
        if (err) res.send(err);

        res.json(item);
    });
});

/* Update the Item with the id (accessed at PUT http://localhost:8080/api/items/:id) */
router.put('/:_id', function(req, res) {
    Item.findOne({ id: req.params._id }, function(err, item) {
        if (err) res.send(err);

        /* UPDATE LOGIC GOES HERE */

        item.save(function(err) {
            if (err) res.send(err);

            res.json({ message: 'Item updated.' });
        });
    });
});

/* Delete the Item with the id (accessed at DELETE http://localhost:8080/api/items/id) */
router.delete('/:_id', function(res, res) {
    Item.remove({ id: req.params._id }, function(err, item) {
        if (err) res.send(err);

        res.json({ message: 'Successfully deleted.' });
    });
});


module.exports = router;