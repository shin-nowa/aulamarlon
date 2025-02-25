// FUNÇÃO AUTO EXECUTAVEL:
// (function foda(){
//     console.log("oi")
// })()

// HOISTING permite que a função chamada venha antes da criação da função (SOMENTE FUNÇÃO)

// imprime()

// function imprime(){
//     console.log("Oi")
// }

// console.log(x)
// let x = "oi"

// FUNÇÕES ANONIMAS - função sem nome e não tem hoisting

// let x = function(){
//     console.log('oi')
// }

// x() // chamando a função que está atrelada a variavel

// ARROW FUNCTION 



// let x = () =>{
//     console.log('oi')
// }

// x() 

// // forma mais contraida da arrow function
// // so pode haver uma entrada de paramwetro ew uma linha de código na estrutura do bloco

// let y = a => console.log(a)

// função callback - entrada de parametro para uma outra função

// função periodica -> setInterval tempo em milisegundos

// let contador = 0

// let int = setInterval(() => { // arrow function como função callback
//     console.log(contador)
//     let data = new Date()
//     document.body.innerHTML = $(data.getHours());
//     $(data.getSeconds());
//     contador ++
// }, 1000)

// ternário, ou o if de uma linha

let x = 30
console.log (x <10?"sim":"nao")