var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    id: Number,
    name: String,
    categories: [String],
    description: String,
    price: Number,
    owner: String,
    location: String,
    imgUrl: String
});

module.exports = mongoose.model('Item', ItemSchema);