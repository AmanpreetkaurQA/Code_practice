var marks = Array(6)
var marks = new Array(20,40,60,80,100,12)

var marks =[20,40,60,80,100,12]
console.log(marks[2])
marks[5]=120
console.log(marks)
console.log(marks.length)

// to enter the new value in the array at the end
marks.push(89)
console.log(marks)

// pop method is used to remove the last element from an array 
marks.pop()
console.log(marks)

// to add one or more elements to the beginning of an array
marks.unshift(99)
console.log(marks)

console.log(marks.indexOf(100))
console.log(marks.includes(145))

//slice method is used to extract a section of an array and return a new array containing the extracted elements.
console.log(marks.slice(2,5))