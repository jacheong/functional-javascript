//A higher order function takes a function as a parameter or returns a function
function createSafeVersion(func) {
    return function( n, message ) {
        if (n && typeof n === 'number') {
            if (message && typeof message === 'string') {
                return func(n,message);
            }
        }
    }
}

function printMessageNTimes(n, message) {
    for( let i = 0; i < n; i++ ) {console.log(message);}

}

function getNthLetter(n, message) {
    console.log(message.charAt(n));
}

var printMessageNTimesSafe = createSafeVersion(printMessageNTimes);
var getNthLetterSafe = createSafeVersion(getNthLetter);

printMessageNTimesSafe(4, "Justin");
getNthLetterSafe(3, "wonderland");