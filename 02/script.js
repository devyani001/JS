// VARIABLES

// var

// datatypes varName = value;   strongly typed language
// JS - loosely typed language 

// datatype by default is given


var age = 22;
console.log(age);

age = "20";
var firstName = "Devyani";
console.log(age);
console.log(firstName);

// naming conventions 

// 1) firstname
// 2) first_name
// 3) FirstName --> classes, constructor functions, etc.
// 4) firstName --> ( preferred ) -->> camelCase

// camel case --> first letter is capital -- devyaniChudhari, devilEmpire ...
// CANNOT START WITH A NUMBER  --> 1devyani - NOOOOO
// CANNOT USE SPECIAL CHARACTERS --> @devyani, #devyani, $devyani - NOOOOO
// CANNOT USE SPACE --> devyani chudhari - NOOOOO
// CANNOT USE KEYWORDS --> var, let, const, function, if, else, switch, case, for, while, do, break, continue, return, try, catch, finally, throw, class, extends, super, import, export
// CANNOT USE RESERVERD WORDS --> async, await, implements, interface, package, private, protected, public, static
// CANNOT USE GLOBAL OBJECTS --> window, document, console, alert, prompt, confirm, setTimeout, setInterval, clearTimeout, clearInterval, fetch, XMLHttpRequest, localStorage, sessionStorage, history, location
// CAMEL CASE IS PREFERRED

// var --> Global scope
// let --> Block scope
// const --> Block scope, cannot be reassigned

var age = 10;   // Global scope VAR
if(true)  
{
    console.log(age); // 10
}

// ==============================================
// ************ LET ************

// way-1 to declare let --> CORRECT

if(true)  
{
    let age2 = 110;   // Block scope LET
    console.log(age2); 
}

// way-1 to declare let --> ERROR

if(true)  
{
    let age3 = 120;   // Block scope LET
}
// console.log(age3);



// let is declared in block but accessed in outside block coz let is block element ...
// let is the new js version
// mostly used is let than var

// =============================================
// ************ CONST ************

// scope -> Local
// once assigned, cannot be changed

const age4 = 130;   // Block scope CONST
console.log(age4); 

// ================================================


// SUMMARY

// var | let | const

// var - Global
// Re-assign
// kahi bhi access krlo
// ancient

// let - Local
// Re-assign
// Access sirf khud ke block ke andr
// latest modern way

// const - Local
// Re-assign nhi kr skte
// Access sirf khud ke block ke andr