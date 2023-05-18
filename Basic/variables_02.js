const acccountId = 4561278
let accountEmail = "spke@gmail.com"
var accountPwd = "hjdi456"
accountCity = "Jaipur"
let accountState; // variable declare or declaration

// acccountId = 56  //not allowed 

console.log(acccountId);

accountEmail = "abc@gmail.com"
accountPwd = "sfg778"
accountCity ="Bengaluru"

/*
prefer not use var 
because of issue in block scope and functional scope
*/

console.table([acccountId, accountEmail, accountPwd, accountCity, accountState])