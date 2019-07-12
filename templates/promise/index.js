const promiseFactory = require('./promise.mjs');

module.exports = ({context, setup, input}) => {

  return promiseFactory({context, setup, input});

};
