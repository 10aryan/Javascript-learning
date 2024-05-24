 const accountId = 144553
 let accountEmail = "aryan@gmail.com"
 var accountPassword = "12345"
 accountCity = "varanasi"
 let accountState

//  accountId = 2 not allowed

/*
Prefer not to use var
because of issuse in bolck acope and functional scope
*/
 
 console.log(accountId);
 accountEmail = "anju@gmail.com"
 accountPassword = "212121"
 accountCity = "mathura"

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState])