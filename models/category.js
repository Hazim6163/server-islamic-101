const mongoose = require('mongoose');
const mongooseTimeStamp = require('mongoose-timestamp');


const Schema = new mongoose.Schema({
    // String field
    name: { type: String, required: true },
    parent: { type: String },
    description: { type: String },
    level: { type: Number, required: true }

});

// attach mongoose Time stamp
Schema.plugin(mongooseTimeStamp);
// create model 
const category = mongoose.model('Category', Schema);


module.exports = { category };

