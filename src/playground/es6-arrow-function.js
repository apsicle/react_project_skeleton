// Arrow functions. 
// 1) Expression syntax. one-liners are easily written
// 2) Always anonymous, must be assigned to variables to be reused.
// 3) Does not have 

const square = function (x) {
    return x * x;
};

const SquareArrow = (x) => {
    return x * x;
};

const SquareArrowExpression = (x) => x * x;

console.log(SquareArrowExpression(9));

const getFirstName = (nameString) => {
    return nameString.split(' ')[0];
}

const getFirstNameExp = (nameString) => nameString.split(' ')[0];

console.log(getFirstName('Ryan yan'));
console.log(getFirstNameExp('Ryan Yan'));

const user = {
    name: 'Ryan',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};
console.log(user.printPlacesLived());

// Exercise

const multiplier = {
    // numbers - array of numbers
    numbers: [1,2,3,4,5],
    // multiplyBy - single number
    multiplyBy: 5,
    // multiply - return a new array where the number have been multiplied.
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());