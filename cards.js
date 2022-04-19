console.log("loaded cards script")

//creating array
let hand = [
    "Ace Spades",
    "2 Diamonds",
    "3 Spades",
    "4 hearts",
   
]

//printing it?
console.log("First dealt", hand)

//what is in position 0 of my list
console.log("0-th card in my hand", hand[0])


//change the card at position 1 with queen of hearts
hand[1] = "Queen Hearts"
console.log("replaced a card", hand)


//drew a new card add 5 clubs later
hand.push("5 clubs")
console.log("drew a card", hand)


//how many cards do you have
console.log("how many cards", hand.length)

let player2Hand = ["6D", "3H", "2C", "JS"]

let allhands = [
    hand,
    player2Hand
]

console.log("All players", allhands)


//player 2 draws a card
allhands[1].push("KD")

console.log("player 2 draws All players", allhands)


let prompts = [
    {
        "prompt": "Left or right",
        "choices": ["Left", "Right"]
    }
]