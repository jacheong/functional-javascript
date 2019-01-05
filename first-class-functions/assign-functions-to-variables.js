//Basic Syntax
const greet = function() {
    console.log("Hello World");
}

//Functions assigned variables can only be used AFTER they have been declared
var line = console.log;
line("Testerino");

//========================= Debugging Example =========================
const DEBUG_MODE_ENABLED = true;

var debug;

if ( DEBUG_MODE_ENABLED ) {
    debug = printDebugMessage;
} else {
    debug = doNothing;
}

//Define the value to print
debug("Some generic message");

function printDebugMessage( message ) {
    console.log("DEBUG: " + message);
}

function doNothing() {}