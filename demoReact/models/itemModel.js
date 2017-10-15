var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    orderId: String,
    companyName: String,
    customerAddress: String,
    orderedItem:String
});

var Items = mongoose.model('Items', itemSchema);

module.exports =Items;