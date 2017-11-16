'use strict';

import mongoose from 'mongoose';

var UserendpointSchema = new mongoose.Schema({
  info: String,
  active: Boolean
});

export default mongoose.model('BookingRecord', UserendpointSchema);
