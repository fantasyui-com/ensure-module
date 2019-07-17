const kebabCase = require('lodash/kebabCase');
const path = require('path');
const fs = require('fs');
const handlebarsCopy = require('../handlebars-copy');

module.exports = function(src, dest, data){

    console.log( dest, data);
    console.log( data);
    handlebarsCopy(src, dest, data);


}
