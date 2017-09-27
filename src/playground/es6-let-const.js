// var's can be redefined. This only really causes problems.
var nameVar = 'Ryan';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// let's cannot be redefined.
let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

// const's can not even be reassigned.
const nameConst = 'Frank';
console.log('nameconst', nameConst);

// var, let, and const work the same in terms of function scope.
// However, let and const also respect block level (for, while, if) scope. Var, on
// the other hand, simply ignores block level scope and defers to the upper level scope.
function getPetName() {
    var petName = 'Hal';
    return petName;
}
// console.log(petName);