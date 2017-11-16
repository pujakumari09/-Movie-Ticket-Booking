'use strict';

import mongoose from 'mongoose';

var SearchMoviesendpointSchema = new mongoose.Schema({
  poster_path: String,
  title: String,
  release_date: String,
  genres: Array,
  runtime: String,
  active: Boolean
});

export default mongoose.model('SearchMovies', SearchMoviesendpointSchema);
