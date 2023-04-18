let ListaNome = ["Daniele" , "Francesco" , "Michele" , "Teodoro" , "Pippo" , "Filippo"]

let ListaCognomi = ["Savoia" , "Sandrini" , "Rossi" , "Balotelli" , "Poli" , "Gagliardini"]
console.log(ListaNome)
console.log(ListaCognomi)




const btnOne = document.getElementById("btn-uno")

btnOne.addEventListener ("click" , function() {
    
let randomNum = Math.floor(Math.random()*ListaNome.length);

document.getElementById("name").innerHTML= (ListaNome[randomNum]);

let randomCog = Math.floor(Math.random()*ListaCognomi.length);

document.getElementById("surname").innerHTML= (ListaCognomi[randomCog]);
    
})


