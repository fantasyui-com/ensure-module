const promiseFactory = require('./promise.mjs');

module.exports = (params, stdLibCallback) => {

  // Configure your inputs
  const context = {};
  const setup = {};
  const input = {};

  // Configure promise with inputs
  const promise = promiseFactory({context, setup, input});

  // Execute your promise
  promise.then( (promiseOutput) => {
    // call the callback
    stdLibCallback(null, promiseOutput);
  }, /* (error) => { stdLibCallback(error); } */ )
  .catch(error => { stdLibCallback(error); });

};
