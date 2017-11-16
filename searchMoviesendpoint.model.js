'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchMoviesendpointSchema = new _mongoose2.default.Schema({
  poster_path: String,
  title: String,
  release_date: String,
  genres: Array,
  runtime: String,
  active: Boolean
});

exports.default = _mongoose2.default.model('SearchMovies', SearchMoviesendpointSchema);
//# sourceMappingURL=searchMoviesendpoint.model.js.map
