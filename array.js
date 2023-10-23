// arrays
let members = ['Tony', 'John', 'Ron', 'Anne', 'Stacy']

console.log(members) // outputs the variable members
console.log(members.length) // outputs the length of the array
console.log(members[0]) // outputs the first element in the array
console.log(members[members.length-1]) // outputs the last element in the array

members.forEach(member => console.log(member)) // prints each element in the array

for (member = 0; member < members.length; member++) {
    console.log(members[member])
    // prints each element in the array 
}

var carnivores = ["tigers", "lions", "wolves", "sharks", "dogs", "eagles"];

carnivores.push("cats", "bears"); // adds elements to the end of the array
console.log(carnivores); // returns the array 
carnivores.pop(); // removes the last element in an array
console.log(carnivores); // returns the array
carnivores.shift(); // removes the first element in an array
console.log(carnivores); //  returns the array 
carnivores.unshift('tigers'); // adds an element at the beginning of an array
console.log(carnivores); // returns the array
console.log(carnivores.indexOf('wolves')) // returns the index of the element 


// objects
let pets = {
    dog: "Bruno",
    cat: "Lucifer",
    bird: "Blu",
    horse: "Maximus"
};

console.log(pets.dog) // returns the value for the dog (Bruno)

let pet = new Object();
pet.name = 'Precious';
console.log(pet); // returns an object {name: 'Precious'}

const dog = {
    name: 'Max',
    age: 8,
    type: 'German Sheperd',
    sayhi: function() {
        console.log("Woof, woof!")
    }
};
console.log(dog);
dog.sayhi(); // Woof, woof!

const person = {
    name: 'Elvis',
    age: '21',
    city: 'Kumasi',
    favoriteFood: 'Fufu',
    sayHi: function() {
        console.log("Hi my name is " + person.name + " and I am " + person.age + " years old") 
    }
};
console.log(person.name);
console.log(person['city']);
person.sayHi();