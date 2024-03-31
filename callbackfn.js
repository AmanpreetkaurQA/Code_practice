
// method 1    ---operation is a callback fn
const calculate=(a,b,operation)=>{
  return operation(a,b)
}
 // operation could be any kind of activity like sum,subtract, multiply
const addition=calculate(10,20,function(num1,num2)
{
 return num1+num2
})
console.log(addition)

// Method 2
const subtraction=(a,b)=> a-b
const sub=calculate(100,50,subtraction)
console.log(sub)

// Method 3
function multiply(a,b)
{
  return a*b
}
const mulResult=calculate(11,11,multiply)
console.log(mulResult);

// example 

function calculator(num1, num2, callback)
{
    let sum=num1+num2
    callback(sum)
}
function display(result)
{
    console.log('Sum is:'+result )
}
calculator(4, 5, display)

const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
console.log(posNumbers);

function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}