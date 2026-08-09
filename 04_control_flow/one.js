// const age = 16  

// if (age >= 18 ){
//     console.log("Eligible")
// }
// console.log("Next")
 
// And operators +++++

// const userLoggedIn = true 
// const debitCard = true

// if ( userLoggedIn && debitCard ) {
//     console.log ("Allow to buy course")
// }

const userLoggedIn = true 
const debitCard = true
const loggedInfromGoogle = false 
const loggedInfromEmail = true 

if(userLoggedIn && debitCard ){
    console.log("Allow to buy course ")
}
if( loggedInfromGoogle && debitCard || loggedInfromEmail ) {
    console.log ("user logged in ")
}