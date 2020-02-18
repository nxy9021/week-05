//This is the print statement of the console
// console.log("Hello world!");
// console.warn(3+6);
// console.info(8);
// console.debug("What's up?");
// console.error(99/0);


// This is an example of variables using var
// There are better ways to do it
// var x = 3;
// var y = "hello";

// console.log(y+x)


// let is scoped

// let x = 4;
// let y = 2;
// console.log(y+x);

// y="hello";
// console.log(y);


// constant does not allow to change
// const today = "2019-02-18";

// console.log(today);

// today = "2020-02-19";


// types
// numbers
// let apples = 3;
// console.log(apples)

// string
// let first_name = "Nanxi";
// console.log(first_name)
// let last_name = "Yu";
// console.log(last_name)
// let full_name = `${first_name} ${last_name}`;
// console.log(full_name)
// let sentense = `He's going to the "store"`;
// console.log(sentense)
// ``is a template string, insert veriables in it

// Boolean
// let isOver18 = true;
// console.log(isOver18);
// let isTeslaOwner = false;
// console.log(isTeslaOwner);

// all upper case is reserved for constant
// veriables cannot start with a Number

// let awesome = null;
// console.log(awesome);
// null means specifictly not set

//arrays=lists
//Do not use this let groceries = Array()

// let groceries = [
//     "apples",
//     "pears",
//     "bananas",
//     "oranges"
// ]
// console.log(groceries)
// console.log(groceries.length)
// console.log(groceries[2])
// console.log(groceries[-1])
// console.log(groceries[4])
// groceries.push("eggs")
// groceries.push("beef")
// groceries.push("sausage")
// console.log(groceries[4])
// console.log(groceries[5])
// console.log(groceries[6])
// let justBought = groceries.pop()
// console.log(groceries.length)
// console.log(justBought)
// index starts with 0
// for add/edit, use splice
// slice does not change the array, splice does

// objects allows us to store multiple things
let person = {
    name:{
        first:"Nanxi",
        middle:"null",
        last:"Yu",
    },
    
    dateOfBirth:"April 3",
    hair: "black",
    hairStyle: "straight",
    favColors: [
        "black",
        "lead",
        "cyan",
        "orange",
    ],
    
};
console.log(person.name.last,person.name.first)

console.log(person.favColors[2])

person.dateOfDeath = null;

console.log(person.dateOfDeath)

