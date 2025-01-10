// for(let i=1;i<=100;i++){
//     console.log("hey")
// }
// //(intilization,condition,increment/decrement)
//calculate the sum 1 to 5;
// let sum = 0;
// let n=10;
// for(let i=1;i<=5;i++){
//     // sum = sum +i;
//     console.log("i=",i)
// }


//**infinite loops */
//a loop never end 
//while loop

// console.log("hello");

// let i = 1;
// while (i <= 10) {
//     console.log("hello");
//     i++
// }
//do while loop
// let i = 1;
// do {
//     console.log("i=", i)
//     i++;

// } while (i <= 10);
//for -of loop
//for-in loop
let student = {
    name: "rajiummar",
    age: 20,
    cgps: 8.5
};
for (let i in student) {
    console.log("i=", i, "value=", student[i])
}