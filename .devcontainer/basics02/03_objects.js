const mysum1 = Symbol("key1")
const mysum2 = Symbol("key2")

const jsuser = {
    name:"Tanish",
    "full name ":"Tanish Sharma",
    mysum1:"key2",//It will be of type String
    [mysum2]:"key3",//It will be of type Symbol
    age:20,
    location:"Ambala",
    email:"Ts@google.com",
    isloggedin:false,
    array :[1,2]
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(typeof jsuser.mysum1)
// console.log(typeof mysum2)
// console.log(typeof mysum1)
// console.log(jsuser[mysum2])

// console.log(jsuser)
jsuser.email = "palak@google.com"
// console.log(jsuser)
// Object.freeze(jsuser)
jsuser.email = "tanish@google.com"
// console.log(jsuser)

jsuser.greeting = function(){
    console.log("hello tanish")
}
jsuser.greetingTwo = function(){
    console.log(`Hello tanish sharma,${this.name}`)
}
// console.log(jsuser.greeting)
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())