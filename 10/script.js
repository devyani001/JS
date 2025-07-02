// **************** Array *****************

const Students = ['piyush','john','jane'];
console.log(Students);
console.log(Students.length);

Students[0] = "Piyush Garg";
console.log(Students);

/*
    1) .length()  - gives length of an array ...
    2) .push()    - adds value at the end of an array ...
    3) .indexOf() - finds index of a value ...
    4) .pop()     - deletes the last value of an array ...
    5) .reverse() - reverse the array ...


    --> different datatype's value ALLOWED ( Heterogeneous Array )
    --> unlike C/C++, Java ...

*/


Students.push("Alexa");
console.log(Students);

const myArray = [1, true, "Piyush", "😈"];
console.log(myArray);

// pushing object in myArrry
myArray.push({name : "Piyush" });
console.log(myArray);

// How to find index of a value
console.log(myArray.indexOf( "😈" ));
// if it gives ( -1 ) index means does not exist value

//      POP
console.log(myArray.pop());
console.log(myArray);

//      REVERSE
console.log(myArray.reverse());