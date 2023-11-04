const accountid = 1651564
let accountemail = "tanish@google.com"
var accountpassword = "165156"
accountcity = "ambala"
let accountstate;

// accountid = 564656, we cannot do this because accountid is constant and cannot be changed..

accountemail = "sharma@google.com"
accountpassword = "146541"
accountcity = "rajpura"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountid)
console.table([accountid,accountemail,accountpassword,accountcity,accountstate])
