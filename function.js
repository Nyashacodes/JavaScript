// console.log("Working!")
function sayMyName(){
    console.log("N")
    console.log("Y")
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("A")
}
// sayMyName if i write this only it will be called as reference and sayMyName() is called execution
sayMyName();

//THE CONCEPT OF RETURN
function add(num1, num2){ // here while we define a function, whatever input we take is called parameter
    console.log(num1+num2)
}
add(3, "a")//here the inputs are called arguments

const result = add(3,5);
// console.log(result);// will give us undefined because retun is not holding anything,because in function defination we did console.log we are not returnig anything. 
//always console.log the returned function
//empty string and undefined is considered as false value
//FUNCTION WITH OBJECTS/ARRAY
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
