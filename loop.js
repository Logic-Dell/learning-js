// loops

// for loops
console.log("I am collecting sticks!\n")
for(let i = 1; i < 10; i++) {
    if(i == 1) {
        console.log("I have ", i, " stick now");
    }
    else {
        console.log("I have ", i, " sticks now")
    }
}

let person = {
    name: 'Tony',
    age: 23,
    city: 'Accra'
}

for(property in person) {
    console.log(property, ":", person[property]);
}

let mates = ['John', 'Enoch', 'Samuel', 'Steve'];

for(mate of mates) {
    console.log(mate)
}


// while loop
let stick = 1;

console.log("I am collecting sticks!\n")
while(stick <= 10) {
    if(stick==1) {
        console.log("I have ", stick, " stick now")
    }
    else {
        console.log("I have ", stick, " sticks now")
    }
    stick++;
}
