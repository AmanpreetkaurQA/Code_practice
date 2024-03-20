//======================= if statement==============================================
var age = 20
//checking the age  
if (age > 18) {
	console.log("Age is greater than 18");
}

console.log("Program End")

//============================== if else=============================================

var number = 13
//Check if the number is divisible by 2 or not  
if (number % 2 == 0) {
	console.log("even number")
} else {
	console.log(number + " " + "odd number")
}

var num1 = 8, num2 = 22
if (num1 > num2) {
	console.log("Greater No.is" + " " + num1)
} else {
	console.log("Greater No.is" + " " + num2)

}

//================================// if else if statement======================

var num = 10
if (num < 0) {
	console.log("The number is negative")
}
else if (num > 0) {
	console.log("The number is positive")
} else {
	console.log("invalid no.")
}

//========================================== Nested if=======================================

var age = 20
var weight = 80
//applying condition on age and weight  
if (age >= 18) {
	console.log("You are eligible to donate111 blood")
	if (weight > 50) {
		console.log("You are eligible to donate blood")
	}
}

// To print the greator number by using The ternary operator (without using if else)

var num1 = 7, num2 = 29
var num3 = num1 > num2 ? num1 : num2
console.log(num3)





