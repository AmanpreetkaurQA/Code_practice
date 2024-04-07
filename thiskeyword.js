const obj ={
    firstName: "Amanpreet",
    lastName: "Kaur",
    fullName: function()
    {
        return this.firstName+" "+this.lastName
    }
}
console.log(obj.firstName)
console.log(obj.fullName())