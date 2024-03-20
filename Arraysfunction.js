var marks =[97,40,71,80]
let sum = 0
// ==============================to find the sum using for loop==========================
for(let i=0;i<marks.length;i++)
{
    
    //console.log(marks[i])
    sum =sum+marks[i]
}
console.log(sum)

//====================== find sum using for...of loop===================================

for(let sum of marks)
{
    sum= sum+marks
}
console.log(sum) 


//======================= we can sum the array values using reduce method===================//reduce(array function)  which is used to perform operation on all the elements of an array
let total = marks.reduce((sum,marks)=>sum+marks,0)
console.log(total)

//============================ create  a new array with even numbers of marks using filter(array function) means we need to filter the even values from an array and push to the new array
let new_array= marks.filter(marks => marks % 2 == 0)
console.log(new_array)

//===========================//Map (array function)- map method is used to create a new array by applying a function to each element of an existing array.
//create  a new array with even numbers of scrore  we need to filter the even values from an array and push to the new array
// and multiply the elemnts of new array with 3

let finalArray=marks.filter(marks=>marks%2==0).map(marks=>marks*2).reduce((sum,marks)=>sum+marks,0)
console.log(finalArray)