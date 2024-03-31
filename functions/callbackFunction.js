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
