// Loops

// for loop --> if u know how many times to print
// () --> Parenthesis

for(let i = 1; i <= 10; i = i+1 )
{
    console.log("Piyush"+i);
}

// =================================================

// While loop()
/*
                                You
                                Home
    While
jab u dont know ki how many time loop chalana h  BUT condition pata hai
like in above example, I dont know the no of steps required to reach home.
*/


let ip = 0;
let house = 50;

while(ip != house)
{
    ip = ip + 1;
    console.log("steps taken" + ip);
}

// =================================================

// Do While loop
/*
    pahle code ko run krta h, then conditon execute krta h
*/

do
{
    ip = ip + 5;
    console.log("steps taken" + ip);

} while(ip <= house);

// =================================================   

// *********************** GAME ***********************

// Guess the input game

/*
parseInt --> use jo bhi enter krega usko interger m convert krega
Prompt   --> user se input lega like SCANF, CIN; 
*/


let number = 40;

let guess = 0;

do
{
    guess = parseInt((prompt("Enter a Number")));
    if(guess == number)
    {
        alert('Winner !!');
        break;
    }
} while(guess != 0);

/*
agar hm yha do-while ki jagah while use krte, to ye pgm kbhi execute hi nhi hota
kyuki condition false hoti hai, guess = 0
guess 0 hoga to while loop chalega hi nhi aur do-while phle run hota h,
wo ek bar run hogaya aur fir wo condition check krega ...
*/