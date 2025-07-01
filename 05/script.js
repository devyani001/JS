// LOGICAL OPERATORS

// 1) AND (&&)
// 2) OR (||) -- > ( || - pipe operator )
// 3) NOT (!)

// AND (&&) - returns true if both operands are true
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// OR (||) - returns true if at least one operand is true
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// NOT (!) - reverses the boolean value
console.log(!true);  // false
console.log(!false); // true


// =============================================================

const age = 22;
const gender = 'male';

if(age >= 18 && gender == 'male')
{
    console.log("you are adult male");
}

// ==========================================================

if(age >= 18 || gender == 'male')
{
    console.log("you are adult male");
}

// === values + data types

// ==========================================================

const number = 5;

if(number % 2 != 0)
{
    console.log("odd");
}



// OR way-2 of writing 'NOT' : 

const number2 = 7;

if(!(number2 % 2 != 0))
{
    console.log("odddd");
}
