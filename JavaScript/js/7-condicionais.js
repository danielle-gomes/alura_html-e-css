console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`) // Declarando Arrays

const idadeComprador = 15
const estaAcompanhado = true
const passagemComprada = true

console.log("Destinos possíveis: ")
console.log(listaDeDestinos) // chamando a lista do array

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1) // remove um item da array 
// } else if (estaAcompanhado) {
//     console.log("Comprador está acompanhado")
//     listaDeDestinos.splice(1, 1) // remove um item da array 
// } else {
//     console.log("Não é permitida a venda")
// }


if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Boa viagem")
    listaDeDestinos.splice(1, 1) // remove um item da array 
} else {
    console.log("Não é permitida a venda")
}


console.log("Embarque: \n\n")
if (idadeComprador >= 18 && passagemComprada) {
    console.log("Boa viagem")
} else {
    console.log("Passageiro não pode embarcar")
}

console.log(listaDeDestinos)

console.log(idadeComprador > 18)
console.log(idadeComprador >= 18)
console.log(idadeComprador < 18)
console.log(idadeComprador >= 18)
console.log(idadeComprador == 18)
console.log(idadeComprador != 18)


// || significa ou
// && significa e
