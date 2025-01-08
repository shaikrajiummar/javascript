//if statement
// let age = 20;
// if (age >= 18) {
//     console.log("yoc can vote ");
// }
// if (age > 18) {
//     console.log("you caaniot vite")
// }
let mode = "dark"
let color;
if (mode === "dark") {
    color = "red";

}
if (mode == "light") {
    color = "white"
}
console.log(color);
//if-else statement
let num = 10;
if (num % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}

//else if statement
let age = 40;
if (age <= 18) {
    console, log("not eligble")
}
else if (age <= 30) {
    console.log("eliginle")

}
else { console.log("both ") }
// tenary operator
//condition ? true : false;
let voter = 45;
let result = voter >= 18 ? "adult" : "child";
console.log(result);