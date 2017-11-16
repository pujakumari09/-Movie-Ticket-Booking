'use strict';

import mongoose from 'mongoose';

var PaymentendpointSchema = new mongoose.Schema({
  MovieName: String,
  Date: String,
  Time: String,
  Theater: String,
  Loc: String,
  Seats: Array,
  Nseat: String,
  Amount: String,
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('UserBooking', PaymentendpointSchema);
