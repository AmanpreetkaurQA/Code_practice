let day="tuesday"
// to find length of the string
console.log(day.length) 

// to find the char at the specified index
console.log(day.charAt(2)) 

// to split the string at specific character
let s= day.split("s")                             // split method stores the splitted strings in the form of array  like ["tue","day"]
console.log(s)

// if you want to print the index of above splitted string array then use index
console.log(s[1])

// to change the string into uupercase
let uppercase= day.toUpperCase()
console.log(uppercase)

// to concatenate the two strings
let string1="aman"
let string2="preet"
let string3= string1.concat(string2)
console.log(string3)

//String lastIndexOf
let stringtest= "There are four dogs in the street"

let test=stringtest.lastIndexOf("four")
console.log(test)

// trim the space in string 
let trimstring=stringtest.trim()
console.log(trimstring)
