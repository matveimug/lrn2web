//////////////////////////////////////////////////
///////////////////1//vars//1/////////////////////
//////////////////////////////////////////////////
/*
var name = 'john';
console.log(name);

var lastName = 'smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/
//////////////////////////////////////////////////
///////////////////2//vars//2/////////////////////
//////////////////////////////////////////////////
/*
var name = 'john';
var age = 26;
//type coercion
//console.log(name + ' ' + age);
//console.log(age + age);

var job, isMarried;
//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

//variable mutation
age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('what is the last name?');
// console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/
//////////////////////////////////////////////////
//////////////////3//operators////////////////////
//////////////////////////////////////////////////
/*
var now = 2017;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2017 -52
//1965

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
// ageJohn = ageJohn + 1;
ageMark *= 2;
// ageMark = ageMark*2

console.log(ageJohn);
console.log(ageMark);
*/
//////////////////////////////////////////////////
///////////////////4//if/else/////////////////////
//////////////////////////////////////////////////
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes') {
    console.log(name + ' isMarried!');
} else {
    console.log(name + ' :(( sad')
}

isMarried = true;


if(isMarried) {
    console.log('YES');
} else {
    console.log('NO');
}


if(isMarried) {
    console.log('YES');
}

//type coercion
if(23 == "23") {
    console.log('something to print...');
}
//no type coercion --- more advised
if(23 === "23") {
    console.log('something else');
};
*/
//////////////////////////////////////////////////
////////////////5//boolean/logic//////////////////
//////////////////////////////////////////////////
/*
// && AND // ! NOT // || or

var age = 20;

if (age < 20) {
    console.log('teen');
} else if (age >= 20 && age < 30) {
    console.log('yung man');
} else {
    console.log('old man');
}

var job = 'teacher';

job = prompt('what job?');

switch (job) {
    case 'teacher':
        console.log('john teaches');
        break;
    case 'driver':
        console.log('john drives cab');
        break;
    case 'cop':
        console.log('fite crime');
        break;
    default:
        console.log('something else');
}
*/
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////6//CODING/CHALLENGE//1//////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
/*
var thirdName = prompt('name');
var johnHeight = 184;
var friendHeight = 184;
var thirdHeight = parseInt(prompt('height'));

var johnAge = 25;
var friendAge = 25;
var thirdAge = parseInt(prompt('age'));

var johnScore = johnHeight + 5 * johnAge;
var friendScore = friendHeight + 5 * friendAge;
var thirdScore = thirdHeight + 5 * thirdAge;

// console.log(johnScore);
// console.log(friendScore);
// console.log(thirdScore);

if (johnScore > friendScore && johnScore > thirdScore) {
    console.log('john is winrar, score: ' + johnScore);
} else if (friendScore > thirdScore && friendScore > johnScore) {
    console.log('frend is winrar, score: ' + friendScore);
} else if (thirdScore > friendScore && thirdScore > johnScore) {
    console.log(thirdName + ' is winrar, score: ' + thirdScore);
} else {
    console.log('it\'s a tie! score: ' + thirdScore);
};
*/
//////////////////////////////////////////////////
///////////////////7//functions///////////////////
//////////////////////////////////////////////////
/*

function calcAge(yOfBirth) {
    var age = 2017 - yOfBirth;
    return age;
}

function yearsRetire(name, year) {
    var age = calcAge(year);
    var retire = 65 - age;
    if (retire >= 0 ) {
        console.log(name + ' retires in ' + retire + ' years');
    } else {
        console.log(name + ' is retired');
    }
}

yearsRetire('john', 1988);
yearsRetire('mike', 1968);
yearsRetire('mary', 1948);

*/
//////////////////////////////////////////////////
//////////8//statements/and/expressions///////////
//////////////////////////////////////////////////
/*
function someFun(par) {
    //code
}

var someFun = function(par) {
    //code
}

//expressions
3 + 4;
var x = 3;
//produces thing

//statement
if (x = 5) {
    //do smth
    //does not produce value
};
*/
//////////////////////////////////////////////////
////////////////////9/arrays//////////////////////
//////////////////////////////////////////////////
/*
var names = ['john', 'jane', 'mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
names[1] = 'ben';
console.log(names);

var john = ['john', 'smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('mr.');
john.pop();
john.shift();
john.indexOf('smith');

console.log(john);

if (john.indexOf('teacher') === -1) {
    console.log('john is not teachr');
} else {
    console.log('john is a dsgnr');
};
*/
//////////////////////////////////////////////////
///////////////////10//objects////////////////////
//////////////////////////////////////////////////
/*
var john = {
    name: 'john',
    lastName: 'smith',
    yOfBurth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'miller';
john['job'] = 'programmer';
console.log(john);

var jane = new Object();
jane.name = 'jane';
jane.lastName = 'smith';
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/
//////////////////////////////////////////////////
//////////////////11//methods/////////////////////
//////////////////////////////////////////////////
/*
//v1.0
var john = {
    name: 'john',
    lastName: 'smith',
    yOfBurth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['jane', 'mark', 'bob'],
    calcAge: function() {
        return 2016 - this.yOfBurth;
    }
};

// console.log(john.calcAge(1970));
console.log(john.calcAge());

var age = john.calcAge();
john.age = age;

console.log(john);
*/
//v2.0
/*
var john = {
    name: 'john',
    lastName: 'smith',
    yOfBurth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['jane', 'mark', 'bob'],
    calcAge: function() {
        this.age = 2017 - this.yOfBurth;
    }
};

john.calcAge();
console.log(john);

var mike = {
    yOfBurth: 1956,
    calcAge: function() {
        this.age = 2017 - this.yOfBurth;
    }
};
mike.calcAge();
console.log(mike);
*/
//////////////////////////////////////////////////
//////////////12//loops/&/iterations//////////////
//////////////////////////////////////////////////
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10 false, end loop!


var names = ['john', 'jane', 'mary', 'mark', 'bob'];
/*
//forwards
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//backwards
for (var i = names.length-1; i >= 0; i--) {
    console.log(names[i]);
}

var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i <= 5; i++) {
    console.log(i);
    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
*/
//////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////13//CODING/CHALLENGE//2//////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
/*
function printFullAge(years) {
    var ages = [];
    var fullAge = [];
    console.log('coding challenge - loopz!');
    console.log('-------------------------');
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2017 - years[i];
    }
    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('person ' + (i + 1) + ' is ' + ages[i] + ' and is of full age');
            fullAge.push(true);
        } else {
            console.log('person ' + (i + 1) + ' is ' + ages[i] + ' and is NOT of full age');
            fullAge.push(false);
        }
    }
    console.log('-------------------------');
    return fullAge;
}

var full_1 = printFullAge([1988, 2000, 2006]);
var full_2 = printFullAge([1986, 1000, 2016]);
*/
//////////////////////////////////////////////////
//////////////12//loops/&/iterations//////////////
//////////////////////////////////////////////////