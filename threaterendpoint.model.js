'use strict';

import mongoose from 'mongoose';

var ThreaterendpointSchema = new mongoose.Schema({
  ThreaterName: String,
  LocationName: String,
  City: String,
  active: Boolean
});

export default mongoose.model('Threaters', ThreaterendpointSchema);
