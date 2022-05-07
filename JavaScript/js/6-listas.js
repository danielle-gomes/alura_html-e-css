console.log(`Trabalhando com listas`)

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

// vsc - Ctrl + K + C comenta um bloco inteiro de código
// vsc - Ctrl + K + U descomenta um bloco inteiro de código
// Shift + Alt + seta pra cima ou pra baixo copia a linha do cursor e joga pra cima ou pra baixo

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`) // Declarando Arrays


listaDeDestinos.push(`Curitiba`) //adiciona um item na lista

console.log("Destinos possíveis: ")
console.log(listaDeDestinos) // chamando a lista do array

listaDeDestinos.splice(1, 1) // remove um item da array (1 é a posição do item que vai ser apagado, 1 é a quantidade de itens pra pra apagar)
// a contagem de posição de um array (chamado e indice) começa sempre em 0

console.log(listaDeDestinos[1]) // vai mostrar só o item da posição q está no colchete (começando sempre em 0)
console.log(listaDeDestinos[1], listaDeDestinos[0]) // mostrando mais de um elemento

