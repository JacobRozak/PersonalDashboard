let mongoose = require('mongoose');

// Article Schema
let imageSchema = mongoose.Schema({
  path:{
    type: String,
    required: false
  }
 // author:{
  //  type: String,
   // required: false
  //}
});

let Image = mongoose.model('Image', imageSchema);
module.exports = Image
