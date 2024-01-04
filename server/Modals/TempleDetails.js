const mongoose = require("mongoose");

const templeDetailModal = new mongoose.Schema({
  templeName: {
    type: String,
  },
  about: {
    type: String,
  },
  address: {
    type: String,
  },
  overView: {
    type: String,
  },
  history: { 
    type: String,
  },
  significance: {
    type: String,
  },
  architecture:{
    type:String
  },
 
  offeringDetails: {
    type: String,
  },
  mapLink: {
    type: String,
  },
  byAir: {
    type: String,
  },
  byTrain: {
    type: String,
  },
  byRoad: {
    type: String,
  },
  instagramLink: {
    type: String,
  },
  youTubeLink: {
    type: String,
  },
  facebookLink: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  image1:{
    type:String
  },
  image2:{
    type:String
  },image3:{
    type:String
  },
  image4:{
    type:String
  },
   image5:{
    type:String
  },
});

module.exports = mongoose.model("templeDetails", templeDetailModal);
