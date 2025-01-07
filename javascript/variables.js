//var:redeclared and updated(global scope)
//let:cannot be redeclared but can de updated(block scope)
//const:cannot be redeclared or updated(block scope)
//block ka matlab hai curly braces ke andar wala part
var a = 10;
console.log(a);

{
    let num;
    num = 20;
    console.log(num);
}

const age = 24;
console.log(age);


