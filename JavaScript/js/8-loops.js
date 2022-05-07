console.log(`\nTrabalhando com condicionais`)

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`) // Declarando Arrays

const idadeComprador = 15
const estaAcompanhado = true
let passagemComprada = false
const destino = "Salvador"

console.log("Destinos possíveis: ")
console.log(listaDeDestinos) // chamando a lista do array


const podeComprar = idadeComprador >= 18 || estaAcompanhado == true

let contador = 0
let destinoExiste = false

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) { // emtre [ ] fica o indice do array, começa em 0 como sempre 
        destinoExiste = true
        break
    } else {
        destinoExiste = false
    }

    contador = contador + 1 // pode ser escrito também contador += 1
}

console.log("Destino existe: ", destinoExiste)

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!")
} else {
    console.log("Desculpe, ocorreu um erro")
}


for (let cont = 0; cont < 3; cont++) { //for (inicializa o contador; condição que ele tem que executar até; incrementa o contador(contador = contador + 1))
    if (listaDeDestinos[contador] == destino) { // emtre [ ] fica o indice do array, começa em 0 como sempre 
        destinoExiste = true
        break
    }
    contador = contador + 1 // pode ser escrito também contador += 1 ou contador++. o nome mais comum pra variavel contadora é i.
}