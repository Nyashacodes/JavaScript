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

function add(num1, num2){ // here while we define a function, whatever input we take is called parameter
    console.log(num1+num2)
}
add(3, "a")//here the inputs are called arguments

const Return = add(3,5);
// console.log(Return);// will give us undefined because retun is not holding anything,because in function defination we did console.log we are not returnig anything. 


//THE CONCEPT OF RETURN
