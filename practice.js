
// all kind of basic structure
let name = "zobayer hosen";

const version = 2026;

function greet(user){
    return 'Hello ,${user}!';// this is the template
}


//this is called arrow funtion
const add = (a,b)=>a+b;

console.log(greet("zobayer"));
console.log(add(5,8));


//Object and Arry
const user= {
    name : "zobayer",
    age : 23,
    greet(){
        console.log("hey this is zobayer");
    }
};
console.log(user)

//Array
const colors = ['red','green','blue']

//array method
colors.forEach(colors=>console.log(colors));

//map working on creating array
const lengths = colors.map(colors => colors.length)

console.log(lengths)

