var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: String,
    categories: [String],
    description: String,
    price: Number,
    owner: String,
    location: String
});

module.exports = mongoose.model('Item', ItemSchema);