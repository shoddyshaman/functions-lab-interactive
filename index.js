let harrysHealth = 100;

// console.log(harrysHealth.toString())
// console.log(String(harrysHealth))

// console.log(Boolean(harrysHealth));

let winnerIs = 'Voldemort is the winner';
let newWinner = winnerIs.toLowerCase().replace('voldemort','harry')

// console.log(newWinner)

// if(newWinner.includes('harry')){
//     console.log('replaced successfull')
// } else if(newWinner.includes('voldemort')){
//     console.log('voldemort still exists')
// }

let newWinnerSplit = newWinner.split(' ')
// console.log(newWinnerSplit)
//convert to kebob-case
let winnerKebobCase = newWinnerSplit.join('-')
// console.log(winnerKebobCase)

//Functions

function isHarryAlive(){
    if(harrysHealth > 0){
        console.log("Harry's alive")
    } else {
        console.log('RIP Harry Potter')
    }
}


function surpriseAttack(attack){
    harrysHealth -= attack
    isHarryAlive()
}

// surpriseAttack(40)
// surpriseAttack(30)
// surpriseAttack(40)
// isHarryAlive()

function greeting(person1,person2){
    console.log(`${person1} and ${person2} say hello to each other`)
}

// greeting('quy','kelsey')
// greeting('bryana','robert')
// greeting('stephen','caitlin')

function rollDice(){
    let possibleRoles = [1,2,3,4,5,6]
    let randomNumber = Math.floor(Math.random() * possibleRoles.length)
    return possibleRoles[randomNumber]
}

// let firstRoll = 'you got: ' + rollDice()
// let secondRoll = rollDice()
// console.log(possibleRoles)
// console.log(secondroll)

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    console.log('firstRoll: ',firstRoll)
    console.log('secondRoll: ',secondRoll)
    return firstRoll * secondRoll
}

let multipledRoll = diceMultiplier()
console.log(multipledRoll)
