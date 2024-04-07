// object is the collection of properties. An object is an entity having state and behaviour(properties and method)
let person =
{
    name: "Aman",
    marks: 94.4,
    printMarks: function() {
        console.log("marks =" , this.marks)    // this means current object property
    }
    
}
console.log(person.name)
person.printMarks()

//Prototype- Js objects have a special property called prototype which has pre built methods and properties
//we can set prototype using _ _proto_ _

const employee={
    calcTax() {
        console.log("Tax rate is 10%");
    },
};

const Amanpreet={
    salary:20000,
    department: "QA"
};
const Amanpreetk={
    salary:40000,
    department: "QA"
};
const Amanpreetkaur={
    salary:60000,
    department: "QA"
};

Amanpreetkaur.__proto__ =employee;
Amanpreet.__proto__ =employee;
Amanpreetk.__proto__ =employee;

Amanpreet.calcTax()
console.log(Amanpreet.salary)