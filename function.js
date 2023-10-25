function name() {
    let firstName = 'Henry';
    let lastName = 'Steveson';
    
    console.log("Hi! My name is", firstName, lastName);
}

name();


function aboutSelf () {
    const self = {
        firstName: "Henry",
        lastName: "Steveson",
        age: 54,
        city: 'New York',
    }

    console.log("Hi, my name is", self.firstName, self.lastName, "I'm", self.age, "years old and I live in the city of", self.city)
}

aboutSelf()


function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(3,4));