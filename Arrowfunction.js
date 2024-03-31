//Anonymous arrow function
const message=()=> {
  console.log("Hello");
}
message();

//Anonymous arrow function using count as a parameter
const messages=(count)=> {
  console.log("Hello Aman");
}
messages(2);

//Anonymous arrow function using a and b as a parameter
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

//arrow function using num as a parameter

const square1=(num)=>num*num
console.log(square1(9));

//arrow function using num as a parameter and returing the value of num*num in a statement

const s=(num)=>
{
  return num*num
}
console.log(square1(10));

const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

const square = x => x * x;
console.log(square(4));

//Arrow function which filter the postive values from Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const posNumbers = myNumbers.filter(x => x >= 0);
console.log(posNumbers);


const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(x => x * x);
console.log(squaredNumbers); 

