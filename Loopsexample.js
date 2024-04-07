
//=================================== while loop =====================================
var i = 1
while (i <= 100) {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++
}



//================================ do while loop====================================

var i = 1
do {
    console.log(i);
    i++
} while (i <= 10);


//================================== switch statement=====================================

var number = 10
//Switch expression  
switch (number) {
    //Case statements  
    case 10:
        console.log("10");
        break;
    case 20:
        console.log("20");
        break;
    case 30:
        console.log("30");
        break;

    //Default case statement  
    default:
        console.log("Not in 10, 20 or 30")
}



//================================= break statement==========================

for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        //breaking the loop  
        break;
    }
    console.log(i)
}



//=========================== continue statement===============================

for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        //using continue statement  
        continue;//it will skip the rest statement  
    }
    console.log(i)
}




//================================= for-of loop(used to iterate over strings and arrays)=====================================

let arr = [12, 23, 44, 56, 78];
//Printing array using for-each loop  
for (let value of arr) {
    console.log(value)
}
 let str="JavaScript"
 for(let val of str)
 {
    console.log("val", val);
 }

//==================== for loop=========================================

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 122]
for (let i = 0; i < array.length; i++) {
    //console.log(i);
    if (i % 2 == 0) {
        console.log(i)
    }
    else {
        console.log(i + ' ' + "odd numbers here");
    }
}

//=============== for in loop(deals with the objects and print the keys and values)
let student={
    name: "Aman",
    age:30,
    cgpa:8.5
}
for(let key in student)
{
    console.log("key=", key, "value=", student[key]);
}
//====================nested for loop======================================

for (let i = 1; i <= 5; i++) {
    let pattern = ''
    for (let j = 1; j <= i; j++) {
        pattern = pattern + '* '
    }
    console.log(pattern)
}  

