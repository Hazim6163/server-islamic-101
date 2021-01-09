const mongoose = require('mongoose');
const mongooseTimeStamp = require('mongoose-timestamp');


const Schema = new mongoose.Schema({
    // String field //TODO
    textField: { type: String, required: true },
    // Number field
    numberField: { type: Number },
    // objField
    ObjField:{
        prop1: { type: String, required: true },
        prop1: { type: Number, required: true },
    } ,
    // refrenced field 
    RefField: { type: mongoose.Types.ObjectId, ref: 'refrenced Model Name UserCard... ' }
    
});

// attach mongoose Time stamp
Schema.plugin(mongooseTimeStamp);
// create model 
const category = mongoose.model('Category', Schema);


module.exports = { category };

