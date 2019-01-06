var _ = require('lodash');

var employees = [
    { name: "John", salary: 60000, age: 27, gender: "M" },
    { name: "Mary", salary: 111000, age: 50, gender: "F" },
    { name: "Susan", salary: 50000, age: 21, gender: "F" },
    { name: "Greg", salary: 100000, age: 45, gender: "M" },
    { name: "Barb", salary: 95000, age: 39, gender: "F" },
];

var males = _.filter( employees, function(employee) {
    return employee.gender === 'M';
} );

var maleAges = _.map( males, function(male) {
    return male.age;
} );

var maleAgeTotal = _.reduce(maleAges, function(acc, male) {
    return acc + male.age;
});

var maleAgeAverage = maleAgeTotal / males.length;

var females = _.filter( employees, function(employee) {
    return employee.gender === 'F';
} );

var femaleAges = _.map( females, function(female) {
    return female.age;
} );

var femaleAgeTotal = _.reduce(femaleAges, function(acc, female) {
    return acc + female.age;
});

var femaleAgeAverage = femaleAgeTotal / females.length;

console.log("Average Males Age: " + maleAgeAverage);
console.log("Average Females Age: " + femaleAgeAverage);