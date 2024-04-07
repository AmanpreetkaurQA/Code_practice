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

async function orderPizza(){
    try{
    const cheese=await getCheese();
    console.log("Here is the cheese");
    const dough=await makeDough(cheese);
    console.log("Here is the dough");
    const pizza=await bakePizza(dough);
    console.log("Here is the pizza");
    }catch(error)
    {
        console.log("error occurred", error)
    }

}
orderPizza();