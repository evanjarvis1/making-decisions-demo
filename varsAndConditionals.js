/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Anakin and
    Obiwan.
*/ 

let obiwanAttack = 25
let anakinAttack = 35

if (obiwanAttack > anakinAttack) {
    console.log(`Obiwan has a better attack than Anakin`)
} else if (anakinAttack > obiwanAttack){
    console.log(`Anakin has a better attack than Obiwan`)
} else {
    console.log(`Anakin and Obiwan have the same attack`)
}

let obiwanHealth = 100
let obiwanDefense = 0

//check to see if obwiwan can survive an attack from anakin
//if he can, health to be decreased by anakin's attack and then his new health logged
//otherwise, obiwan was slain by anakin

if (obiwanHealth >= anakinAttack) {
    obiwanHealth -= anakinAttack
    console.log(`Obiwan's Health is now ` + obiwanHealth)
} else {
    console.log(`Obiwan was killed by Anakin`)
}

obiwanDefense = 30

let coinFlip = `heads`

// if (coinFlip !== `tails`){
//     console.log(`The fight continues`)
// } else [
//     console.log(`Anakin flees from Obiwan`)
// ]

for (let i=0; i < 5; i++){
    if (obiwanHealth >= anakinAttack - obiwanDefense) {
        obiwanHealth -= anakinAttack - obiwanDefense
        console.log(`Obiwan's Health is now ` + obiwanHealth)
    } else {
        console.log(`Obiwan was killed by Anakin`)
    }
}

while(obiwanHealth > 0) {
    obiwanHealth -= (anakinAttack - obiwanDefense)
    console.log(`Obiwan's health is now ${obiwanHealth}`)
    if(obiwanHealth <= 0){
        console.log(`Obiwan is part of the living force now.`)
    }
}