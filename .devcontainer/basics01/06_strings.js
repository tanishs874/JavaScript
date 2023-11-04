const name = "Tanish"
const repocount = "10"
console.log(name + repocount + " hello")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const new_name = new String("Tanish sharma")
console.log(new_name[0])
console.log(new_name.__proto__)
console.log(new_name.charAt(3))
console.log(new_name.length)
console.log(new_name.toUpperCase())
console.log(new_name.indexOf('n'))

const newString = new_name.substring(0,5) 
console.log(newString)//->The answer will be Tanis   h->will not be there

const newString_one = "          Tanish          "
console.log(newString_one.trim())//-> It will remove all white spaces from the starting and the end but not from the middle

const url = "https://Tanish.com.tanish%20choudhary"
console.log(url.replace('%20','-'))//->It will remove %20 with -
console.log(url.includes("tanish"))//->Return the value in boolean
console.log(url.includes("sharma"))//->Return the value in boolean

const NewString = new_name.split(" ")//->Split the values in whatever the way we want
console.log(NewString)