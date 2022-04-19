console.log("Jonathon is logged in")

let user_age = 26

//expressions
2 + 2

//more debug
console.log("my age was ", user_age)
let creditCardAdded = true
//match any 25 and older and a credit card
if(user_age >= 25 && creditCardAdded === true){
    //prompt user for a vehicle
    let vehicle = window.prompt("Which vehicle do you want?")
    console.log(`You choose ${vehicle}. Have a nice trip!`)
}
//anyone 18 or older
else if (user_age >= 18){
    console.log("Would you like to order an uber?")
}
//every other case
else{
    console.log("Have your parent or guardian order it for you")
}


//get color from user
let color_selected = window.prompt("Pick a color for your lights")
switch (color_selected) {
    case 'red':
        //console.log this line
        console.log("Turned the LED red")
        //exit the switch case bc i matched a value
        break;
    case 'blue':
        console.log("Turned the LED blue")
        break;
    //similar to the esle match everything else
    default:
        let colors = ["yellow", "brown"]
        //inject that value inot the console log
        console.log(`Turned the LED ${color_selected}`)
        break;
}