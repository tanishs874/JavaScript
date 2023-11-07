// console.log("T")
// console.log("A")
// console.log("N")
// console.log("I")
// console.log("S")
// console.log("H")

function sayMyname(){
    console.log("T")
console.log("A")
console.log("N")
console.log("I")
console.log("S")
console.log("H")
}
// sayMyname()

// function addtwonumbers (number1 , number2){
//     console.log(number1+number2)
// }
// addtwonumbers(10,null)
// addtwonumbers(10,20)//30
// addtwonumbers(10,"4")//104

function addtwonumbers (number1,number2){
    // let result = number1+number2
    // cosole.log("Tanish")//it will be printed
    return number1+number2
    // console.log("Tanish")//It will not be printed
    
}

// const result = addtwonumbers(10,20)
// console.log(result)

function loginusermessagae(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in `
}
console.log(loginusermessagae("Tanish"))
console.log(loginusermessagae())

