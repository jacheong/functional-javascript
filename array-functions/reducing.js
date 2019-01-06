//Reduce an array to a single value via a function

var _ = require('lodash');

var numbers = [ 3, 8, 4, 12, 20 ];
var singleValue;

singleValue = _.reduce( numbers, function(acc, element) {
    return acc + element;
} );

console.log("initial: " + numbers);
console.log("final: " + singleValue);