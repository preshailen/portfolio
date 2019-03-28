const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Project = new Schema({
  title: {
    type: String
  },
  type: {
    type: String
  },
  github: {
    type: String
  },
  demo: {
    type: String
  },
  description: {
    type: String
  }
},{
    collection: 'projects'
});

module.exports = mongoose.model('Project', Project);
