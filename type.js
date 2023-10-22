// data types in js
let animal, isHungry, age;

animal = "dog"; // string
isHungry = false; // boolean
age = 10; // number


// strings
let self, aboutSelf;

self = "Hello, My name is Mills";
aboutSelf = ' I am a javascript enthusiast';
console.log(self, aboutSelf)
console.log(self.length);

// string concatenation
var str = "My name is" + " " + "Mills";

var str = 'My name is';
str += '';
str += 'Mills';

var str1 = 'My name is';
var str2 = str1.concat(' ', 'Mills');

// multi-line strings
console.log('My name is Mills\n' +
'And I am a javascript enthusiast!');

// template literals
var petName = 'Peace';
var pet = `The name of my pet is ${petName}`; 


// number
var num = '5';
console.log(typeof(num)); // output is string
num = Number(num);
console.log(typeof(num)); // output is number

// manipulating numbers
console.log(Number.isNaN('boy')); // returns a boolean value of false
console.log(isNaN('boy')); // returns true
console.log(parseInt('345numbers')); // returns 345 as an integer number


// boolean
let compare;

compare = 4 > 5;
console.log(compare); // returns false
compare = 5 < 6;
console.log(compare); // returns true
compare = 6 <= 7;
console.log(compare); // returns true
compare = 5 === 10/2;
console.log(compare); // returns true
compare = 0 !== 1;
console.log(compare); // returns true
compare = 5 > 3 && 6 < 9;
console.log(compare); // returns true
compare = 5 > 8 && 6 < 9;
console.log(compare); // returns false
compare = 5 > 8 || 6 < 9;
console.log(compare); // returns true

// if/else statement
let gender = 'male';
age = 60;

if(gender === 'male' && age === 18) {
    console.log('You are now an adult and can vote');
}
else if(gender === 'male' && age === 60) {
    console.log('You are now an old man and needs to retire');
}
else {
    console.log('Your age or gender was not considered')
}

// switch statement
var fruit = 'orange';

switch (fruit) {
    case 'banana':
        console.log("A " + fruit + " is yellow");
        break;
    case 'orange':
        console.log("A " + fruit + " is orange");
        break;
    case 'strawberry':
        console.log("A " + fruit + " is red");
        break;
    default:
        console.log("I don't know what color the " + fruit + " is.");
        break;   
}