// const tinderuser = new Object()
const tinderuser = {}
tinderuser.id = "12355"
tinderuser.name = "Tanish"
tinderuser.isloogedin = false

// console.log(tinderuser)

const regularuser = {
    email:"Tanish@google.com",
    fullname1:{
        userfullname:{
            firstname:"Tanish",
            lastname:"sharma"
        }
    }
}
// console.log(regularuser.fullname?.userfullname.firstname);

// const object1 = {1:"a",2:"b"}
// const object2 = {3:"a",4:"b"}
// const object5 = {4:"a",5:"b"}
// const object11={11:"p",12:"q"}
// const object12={13:"x",14:"y"}


// const object3 = Object.assign({},object1,object2,object5)
// const object4 = Object.assign(object1,object2,object5)
// console.log(object3)
// console.log(object4)
// console.log(object1===object4)//True 
// console.log(object1===object3)//False

// const object10 = {...object11,...object12};
// console.log(object10);
// console.log(object11);
// console.log(object12);

const users = [{
    email:"Tanish@google.com"
},{
    location:"village area"
},{
}
]
console.log(users[0].email)
console.log(users[1].location)
console.log(Object.entries(tinderuser))

console.log(tinderuser.hasOwnProperty('islooged'))//false
console.log(tinderuser.hasOwnProperty('isloogedin'))//True