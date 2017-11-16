/**
 * SearchMoviesendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import SearchMoviesendpoint from './searchMoviesendpoint.model';
var SearchMoviesendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
SearchMoviesendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  SearchMoviesendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    SearchMoviesendpointEvents.emit(event + ':' + doc._id, doc);
    SearchMoviesendpointEvents.emit(event, doc);
  }
}

export default SearchMoviesendpointEvents;
