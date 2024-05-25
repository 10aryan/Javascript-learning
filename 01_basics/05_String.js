const name = "aryan"
const repCount = 30

// console.log(name + repCount +"value");

console.log(`Hello My Nmae is ${name} and my repoCount is ${repCount}`);

const gmaeName = new String('aryan-singh')
console.log(gmaeName[0]);
console.log(gmaeName.__proto__);
console.log(gmaeName.toUpperCase());
console.log(gmaeName.charAt(3));
console.log(gmaeName.indexOf('y'));
const newString = gmaeName.substring(0,4)
console.log(newString);
const anotherString = gmaeName.slice(-10,4)
console.log(anotherString);
const newString1 = "   aryan   "
console.log(newString1)
console.log(newString1.trim());
const url = "https://aryan.com/aryan%20singh"
console.log(url.replace('%20','-'));
console.log(url.includes('aryan'));

console.log(gmaeName.split('-'));
