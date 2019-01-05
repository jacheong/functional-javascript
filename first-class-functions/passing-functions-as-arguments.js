function doIf(condition, func) {
    if (condition) {
        func();
    }
}

const x = 1;

doIf(x === 1, function() {
    console.log("x is equal to 1");
});

doIf(x === "Bananas", function() {
    console.log("x is equal to Bananas");
});

doIf(x < 10 && x > 0, function() {
    console.log("x is between 0 and 10");
});

//=============== Multiple Function Parameters Example ================
function doIfElse(condition, f1, f2) {
    if (condition) {
        f1();
    } else {
        f2();
    }
}

var y = 1;

doIfElse( 
    y === 1,
    function() {
        console.log("y is equal to 1");
    },
    function() {
        console.log("y is not equal to 1");
    }
);