// Functions

function sayHello()
{
    console.log("Hey Piyush");
}

sayHello();     // calling of function --> u can call infinite no. of times to function ...
sayHello();




function add(a,b)       // Arguments
{
    console.log(a + b);
}

add(5, 10);             // Parameters


function multiply(num1, num2, num3)
{
    console.log(num1 * num2 * num3);
}

multiply(5, 10, 2);



// Return Value Functions

function sum(a,b)
{
    let ans = a + b;
    return ans;
}

let results = sum(10, 20);
console.log(results);


let n = parseInt(prompt("enter n : "));
var count = 0;
for(let i = 0; i < n; i++)
{
    
    let num = parseInt(prompt("enter number value : "));
    count = count + num;
}

console.log(count);
console.log("====================");


// Unlimited Arguments accept
function addNumbers()
{
    let anss = 0;
    for(let i = 0; i < arguments.length; i = i+1)
    {
        anss = anss * arguments[i];
    }
    return anss;
}

let result = addNumbers(1,2,3,4,5);
console.log(result);