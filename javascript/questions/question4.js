let score =prompt("enter the score")

let grade;

if (score >= 85) {
    grade = "A";

}
else if (score >= 70) {
    grade = "B";
}
else if (score >= 60) {
    grade = "c";

}
else if (score >= 50) {
    grade = "D";
}
else if (score >= 40) {
    grade = "E";
}
let result = score>=40 ? "pass": "fail";
console.log(result,"grade")
console.log(grade);

// let score = prompt("Enter the score:");
// score = parseInt(score, 10); // Convert the input to a number
// let grade;

// if (score >= 85) {
//     grade = "A";
// } else if (score >= 70) {
//     grade = "B";
// } else if (score >= 60) {
//     grade = "C";
// } else if (score >= 50) {
//     grade = "D";
// } else if (score >= 40) {
//     grade = "E";
// } else {
//     grade = "F"; // For scores below 40
// }

// let result = score >= 40 ? "Pass" : "Fail";
// console.log(result, grade); // Correct usage of variables
