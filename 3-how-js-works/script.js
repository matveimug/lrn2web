///////////////////////////////////////
// Lecture: Hoisting

/*
//functions
calcAge(1965);
// func declaration
function calcAge(year) {
    console.log(2017 - year);
}
//retirement(1990);
//func expression
var retirement = function(year) {
    console.log(65 - (2017 - year))
};

// vars
// vars that don't have value YET have value 'undefined'
console.log(age);
var age = 23;
console.log(age);

function foo() {
    //own execution context object
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
//global execution context object
console.log(age);
*/


///////////////////////////////////////
// Lecture: Scoping

// First scoping example
// Lexical scoping
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    // console.log(c);
    console.log(a+d)
}
*/

///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

calcAge(1985);

function calcAge(year) {
    // console.log(2017 - year);
    // console.log(this);
}

var john = {
    name: 'john',
    birth: 1990,
    calcAge: function() {
        console.log(this);
        console.log(2017 - this.birth);
        /*
        function inner() {
            // console.log(this);
        }
        inner();
        */
    }
};
john.calcAge();

var mike = {
    name: 'mike',
    birth: 1984
};
mike.calcAge = john.calcAge;
mike.calcAge();