// Primitive

// thier are 7 type of perrmitive datatype
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null

let userEmail 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 266549459496644644463n


//Reference or Non primitive

// thier are 3 type in Nom primitive datatype
// Array, Objects, Functions

const heros = ["shaktiman","naagraj","daaga"];

let myObj = {
    name:"aryan",
    age: 22

}

const muFunction = function(){
    console.log("Hello World");
}

console.log(typeof score);
console.log(typeof scoreValue );
console.log(typeof isLoggedIn );
console.log(typeof outsideTemp );
console.log(typeof userEmail );
console.log(typeof id );
console.log(typeof anotherId );
console.log(typeof bigNumber );
console.log(typeof heros );
console.log(typeof myObj );
console.log(typeof muFunction );


