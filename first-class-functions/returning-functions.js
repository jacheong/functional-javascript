//Basic syntax
function giveMeAFunction() {
    return function() {
        console.log("I'm a function");
    };  
}

const aFunction = giveMeAFunction();
aFunction();

//=============== Closure Example ===============
//Using a closure lets us use the input parameters in the parent function withouth exposing them when assigned to a variable
function createCounter(count = 0) {

    return {
        increment: function() {
            count += 1;
        },
        decrement: function() {
            count -= 1;
        },
        currentValue: function() {
            return count;
        }
    };
}

var myCounter = createCounter();

myCounter.increment();
console.log(myCounter.currentValue());