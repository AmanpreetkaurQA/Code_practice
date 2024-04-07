// Promise used with synchronous code
const ticket = new Promise(function(resolve, reject) {
    const isBoarded=false;
    if(!isBoarded)
    {
        resolve("You are in the flight");
    }else{
        reject("Your flight has been cancelled");
    }
    
    });
    
    ticket.then((data) =>{
        console.log("hurray", data);
    })
    .catch((data)=>{
        console.log("oh no",data);
    })
    .finally(()=>{
        console.log("I will always be executed")
    });
    
   // Promise us a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not. A promis may have three states: Pending. fulfilled, rejected

   //Promise example in asynchronous code

    function getCheese() {
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                const cheese= "🧀";
                resolve(cheese);
            }, 2000);
        });
    }

    function makeDough(cheese) {
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                const dough= cheese + "🥟";
                resolve(dough);
                //reject("bad cheese");
            }, 2000);
        });
    }

    function bakePizza(dough) {
        return new Promise((resolve,reject) =>{
            setTimeout(() =>{
                const pizza= dough + "🍕";
                resolve(pizza);
            }, 2000);
        });
    }

    getCheese()
    .then((cheese) =>{
        console.log("here is the cheese");
        return makeDough(cheese)
    }).then((dough) => {
        console.log("Here Is the dough");
        return bakePizza(dough)
    }).then((pizza) => {
        console.log("Here is the Pizza")
    }).catch((data) =>{
        console.log("error occurred",data)
    }).finally(()=>{
        console.log("Process ended")
    })