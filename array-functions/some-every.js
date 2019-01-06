//_.some() returns true if at least one value returns true. _.every() value retuns true

var _ = require('lodash');

var numbers = [ 3, 8, 4, 12, 20 ];
var someValues;
var everyValue;

someValues = _.some(numbers, function(element) {
    return element % 2 === 0;
});

everyValue = _.every(numbers, function(element) {
    return element % 2 === 0;
}); 

console.log(someValues);
console.log(everyValue);