//Types of data
/*
Primitive data type -> String,number,bigint,boolean,null,undefined,symbol,object
Non-Primitive data type -> Array,object,Functinos
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);//->type of is Symbol

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
Stack(Primitive) , Heap(Non-Primitive)
*/

let myname = "Tanish Sharma"
let anothername = myname

anothername = "Tanish"
console.log(myname)//->Tanish sharma
console.log(anothername)//->Tanish

let userone =  {
    email: "userone@google.com",
    upi: "userone@ybl",
}
let usertwo = userone

usertwo.email = "tanish@google.com"
console.log(userone.email)
console.log(usertwo.email)
