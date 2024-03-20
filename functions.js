//=================function declaration with name===============
function add(a,b)
    {  
    return a+b
    }  

    let sum=add(5,4)
    console.log(sum)

    //++++++++++++++ Anonymous function+++++++++++++++++++++++++++++ that do not have name

    let sumofNumbers=function(c,d)
    {
        return c+d
    }
    let finalsum= sumofNumbers(12,13)
    console.log(finalsum)

    //++++++++++++++++ arrow function++++++++++++++++++++++++   Arrow functions are particularly useful for short, one-line functions

    let sumofIntegers= (a,b)=> a+b
    
    console.log(sumofIntegers(6,7))