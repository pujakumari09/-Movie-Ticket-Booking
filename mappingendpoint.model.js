'use strict';

import mongoose from 'mongoose';

var MappingendpointSchema = new mongoose.Schema({
  Poster: String,
  Mvname: String,
  Thname: String,
  Lname: String,
  Cname: String,
  ShowTime: String,
  ShowDate: String,
  active: Boolean
});

export default mongoose.model('Mapping', MappingendpointSchema);
