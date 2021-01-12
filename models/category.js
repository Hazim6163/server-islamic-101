const mongoose = require('mongoose');
const mongooseTimeStamp = require('mongoose-timestamp');


const Schema = new mongoose.Schema({
    // String field
    name: { type: String, required: true },
    parent: { type: String },
    description: { type: String },
    level: { type: Number, default: 0 },
    catsCount: { type: Number, default: 0 },
    ideasCount: { type: Number, default: 0 },
    cats: { type: Array },
    ideas: { type: Array },

});

// attach mongoose Time stamp
Schema.plugin(mongooseTimeStamp);
// create model 
const category = mongoose.model('Category', Schema);


module.exports = { category };

