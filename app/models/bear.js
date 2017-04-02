/**
 * Created by Jakob on 02.04.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Bear', BearSchema);