let score = "33abc"
console.log(typeof score)
console.log(typeof(score))

let number = Number(score)
console.log(typeof number)
console.log(number)

// "33" -> 33
// "33abc" -> Nan
// true -> 1 , false -> 0

let isloggedin = 0;
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin)

// 1 -> True
// 0 -> False
// "" ->False
// "Tanish" ->True

let sumnumber = 33
let stringnumber = String(sumnumber)
console.log(stringnumber)
console.log(typeof stringnumber)

let value = 3
let negvalue = -value
console.log(negvalue)

/*console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)
*/

let str1 = "Tanish"
let str2 = " Sharma"
let str3 = str1 + str2
console.log(str3)

console.log("1"+2) // ->12
console.log(1+"2") // ->12
console.log("1"+ 2 + 2) // ->122
console.log(1 + 2 + "2") // ->32

console.log(true) // ->true
console.log(+true) // -> 1
console.log(+"") // -> 0

let gamecounter = 100
++gamecounter;
console.log(gamecounter)
