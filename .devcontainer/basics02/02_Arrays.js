const marvel_heros = ["Thor","IronMan","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) 
//The Push method will create a array within a array and will show the result like this 
//[ 'Thor', 'IronMan', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]

const allheros = marvel_heros.concat(dc_heros)
console.log(allheros)
//On the other side the concat will show the result like this
//[ 'Thor', 'IronMan', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

//spread operator

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Tanish"))
console.log(Array.from("Tanish"))
console.log(Array.from({name:"Tanish"}))//Interesting  case it will return [] empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))