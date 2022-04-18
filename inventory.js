//my first program is always hello world
console.log("Hello world")

/*
Instructions for using this program:
*/

//create a box with the value of 5 in it
var x = 5
var candyCanes = 5
//probably the best choice
var numCandyCanes = 5 

var myPhoneNumber = "123-456-7890"

//go get me x and print its value with some formatting
console.log("x: ", x)

//box with user's name
var user_name = 'jonathon'

//print from the user name box
console.log("user_name: ", user_name)


//alternatives to var
let my_variable_is_scoped = true//scoped variable

//designed not to change
const my_var_should_not_change = true

let isLightsOn = true

//i have eaten 1000 today
let calories = 1000

console.log("calories consumed", calories)

//Do math without storing
console.log(calories + 500)

console.log("calories did not change", calories )

//change the value in the box
calories = calories + 500
console.log("calories did change", calories )



//make the user's full name
let user_first = "jonathon"

let user_last = "hinchley"

//combine the 2 strings
console.log(user_first + user_last + "@company.com")

var link = "http://dangerous.com"
//string template interpolation
var email = `Hi ${user_name}, You have won 1 million dollars, click this sketchy ${link} it totally is safe`

console.log(email)

let groceries = "apples, potatoes, milk"
console.log("my grocies", groceries)

let user_age = 18

//expressions
2 + 2

console.log("Can user rent a vehicle?", user_age >= 25)

console.log("Can the user vote", user_age >= 18)

