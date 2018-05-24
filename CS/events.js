/*  CS-2  */

var EventEmitter = require('events').EventEmitter;

var logger = new EventEmitter();

logger.on('error', function (message) {
  console.log('Err:'+ message);  
});

logger.emit('error', 'Spilled Milk');
// Use for to emmit error event