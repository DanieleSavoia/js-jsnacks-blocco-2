let GruppoVuoto = [];

let numUno = parseInt(prompt("Dammi un numero (1)"))
let numDue = parseInt(prompt("Dammi un numero (2)"))
let numTre = parseInt(prompt("Dammi un numero (3)"))
let numQuattro = parseInt(prompt("Dammi un numero (4)"))
let numCinque = parseInt(prompt("Dammi un numero (5)"))
let numSei = parseInt(prompt("Dammi un numero (6)"))


console.log(GruppoVuoto)



if (numUno % 2 ==0) {
    console.log("numero pari")
    GruppoVuoto.push(numUno)
}else {
    console.log("numero dispari")
}

if (numDue % 2 ==0) {
    console.log("numero pari")
    GruppoVuoto.push(numDue)
}else {
    console.log("numero dispari")
}
if (numTre % 2 ==0) {
    console.log("numero pari")
    GruppoVuoto.push(numTre)
}else {
    console.log("numero dispari")
}
if (numQuattro % 2 ==0) {
    console.log("numero pari")
    GruppoVuoto.push(numQuattro)
}else {
    console.log("numero dispari")
}
if (numCinque % 2 ==0) {
    console.log("numero pari")
    GruppoVuoto.push(numCinque)
}else {
    console.log("numero dispari")
}
if (numSei % 2 ==0) {
    console.log("numero pari")
    GruppoVuoto.push(numSei)
}else {
    console.log("numero dispari")
}


document.getElementById("Gruppo").innerHTML = GruppoVuoto;