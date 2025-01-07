// /**/ 
// // data types in javascript
// // Number:Represents numeric values (integers, floats).	let num = 42;
// // String:Represents text, enclosed in quotes.	let name = "Alice";
// // Boolean:Represents logical values: true or false.	let isTrue = false;
// // Undefined:Represents a variable declared but not assigned.	let x; // undefined
// // Null	:Represents intentional absence of value.	let value = null;
// // Symbol:Represents unique, immutable identifiers.	let id = Symbol("id");
// // BigInt:Represents large integers beyond Number limit.	let big = 123n;

// //number
// let num = 46;
// console.log(num);
// //string
// let a = 'rajiummar'
// console.log(a);
// //boolean
// let isname = true;
// console.log(isname);
// //undefined
// let x;
// console.log(x);
// //null
// let value = null;
// console.log(value);
// //symbol
// let id = Symbol("id");
// console.log(id);
// //bigint
// let big = 123n;
// console.log(big);


//object
const student = {
    name: 'rajiummar',
    age: 20,
    cgpa: 8.5,
    ispass: false,


};
student["cgpa"] = student["cgpa"] + 2;
console.log(student);
console.log(student.cgpa);
