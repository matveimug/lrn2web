//1. vars I
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

//2. vars II
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

//3. operators
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

////////////
//4. IF/ELSE
////////////
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

///////////////////////////
//5. boolean logic/////////
///////////////////////////
// && AND // ! NOT // || or

/*
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
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////CODING/CHALLENGE/1//////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
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
/////////////////////////////////////////////
/////////////////////////////////////////////
