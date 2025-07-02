/*  ************** Arrow Functions ************** 
            arrow functions - Global Scoped Functions ...
    1) Syntax
    2) 'arguments' keyword
    3) Hoisting
    4) This Keyword
*/

// 1) Syntax
// ==================================================================
const sayHello = () =>
{
    console.log("Hello World!!");
}

sayHello();

// way-1 to write arrow function
const add = (a, b) =>
{
    return a + b;
}

let result = add (5, 2);
console.log(result);


/* way-2 to write arrow functions
    like if-statement if your function is having only one operation in
    {} these braces then u can use way-2 for writing functions 
    is known as 'One Liner code Functions'.
*/
const add2 = (a, b) => a + b;

let result2 = add2 (5, 5);
console.log(result2);


/* 2) 'arguments' keyword
    this 'argument' keyword is not available in arrow functions
    so here for this problem u can use split  method here ...
================================================================== */

const addNumbers = (...nums) =>
{
    console.log(nums);
}

addNumbers(1,2,3,49,50);



/* 3) Hoisting
    Normal function me function pahle call krk baad me define kr skte hai ...
    BUT Arrow Function doesn't allow pahle function calling then declaration
================================================================== */

const sayHey = () =>
{
    console.log("Hey there !!");
}

sayHey();



/* 4) 'This' Keyword
    
================================================================== */

