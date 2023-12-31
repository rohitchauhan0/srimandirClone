const mongoose = require("mongoose");

const subsectionModal = new mongoose.Schema({
  title1: {
    type: String,
  },
  title2: {
    type: String,
  },
  title3: {
    type: String,
  },
  title4: {
    type: String,
  },
  title5: {
    type: String,
  },
  title6: {
    type: String,
  },

  description1: {
    type: String,
  },
  description2: {
    type: String,
  },
  description3: {
    type: String,
  },
  description4: {
    type: String,
  },
  description5: {
    type: String,
  },
  description6: {
    type: String,
  },

 heading1:{
    type: String,

 },
 heading2:{
    type: String,

 },
 heading3:{
    type: String,

 },
 heading4:{
    type: String,

 },
 heading5:{
    type: String,

 },

 heading11:{
    type: String,

 },
 image1:{
    type: String,

 },
 image2:{
    type: String,
 },
 createadAt:{
    type:Date,
    default:Date.now()
 },
 blogDescription:{
    type:String
 }
});



module.exports = mongoose.model("subsection", subsectionModal)