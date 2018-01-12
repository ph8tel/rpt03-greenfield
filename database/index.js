const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://writetoalexander:harbourpower@ds249707.mlab.com:49707/video-chat', console.log('connected to db'));

const userSchema = new Schema({
  userName: String,
  cohort: String,
  teamName: String,
  sprintName: String
})


let User = mongoose.model('User', userSchema);

module.exports = User;