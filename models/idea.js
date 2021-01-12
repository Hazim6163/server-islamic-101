const mongoose = require('mongoose');
const mongooseTimeStamp = require('mongoose-timestamp');


const Schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    parent: { type: String },
    source: { type: String },

});

// attach mongoose Time stamp
Schema.plugin(mongooseTimeStamp);
// create model 
const idea = mongoose.model('Idea', Schema);


module.exports = { idea };

