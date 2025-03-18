let usuario = {
    nome: 'carlos',
    idade: 22,
    endereco: {
        rua: 'massa',
        numero: 45,
        bairro: 'madalena',
    },
    imprimir: ()=>{
        console.log(usuario)
    }
}

usuario.nome = 'marlon' // forma 1 de modificar o usuario

usuario['idade'] = 30 // forma 2 de modificar o usuario

usuario.endereco['rua'] = 'outra rua' // forma hibrida - modificar objeto dentro de objeto

usuario['endereco'].rua = 'rua quente' // outra forma

// conversao para string e formato de objeto

// document.write(usuario.nome) //renderizando o objeto orientado, especificando o que vai ser imprimido

// JSON.stringify - converte o objeto para o formato string com a formatação de objeto

let usuarioString = JSON.stringify(usuario)

// JSON.parse - converte a string e volta para o formato objeto

// usuarioString = JSON.parse(usuarioString) // objeto que tinha sido convertido para strng de volta no formato objeto

console.log(usuarioString)

console.log(usuario)

// CRUD - create read update delete

// local storage e session storage
//criar um espaço no session storage

sessionStorage.setItem('Celular', 'A54')

localStorage.setItem('Celular 2', 'iPhone')

let celular = localStorage.getItem('Celular 2')

console.log(celular)

// fazer um script que gera um contado que, ao atualizar a tela, continuada mesma contagem

// let contador = 0

// if(localStorage.getItem('contador')){
//     contador = localStorage.getItem('contador')
// }

// setInterval(() => {
//     document.body.innerHTML = contador
//     localStorage.setItem('contador', contador)
//     contador++
// }, 1000);

// para guardar um objeto no storage, devo converter ele para string (JSON.stringfy)

let usuario2 = {
    nome: 'lima',
    idade: 51,
    endereco: {
        rua: 'quente',
        numero: 12,
        bairro: 'lua',
    }
}

let usuario2String = JSON.stringify(usuario2)

localStorage.setItem('usuario 2', usuario2String)

// comando para remover todo o local ou session storage

// localStorage.clear = limpa tudo

// localStorage.removeItem('item') - remove item especifico

let primeiro = document.getElementById('primeiro')
console.log(primeiro)

primeiro.innerHTML = 'mudou'

// puxar o elemento a partir de sua classe - > num array

let texto = document.getElementsByClassName('texto')

texto[2].style.color = 'Blue' // MODIFICANDO O SEGUNDO TEXTO DA STRING

texto[1].style.color = 'pink'

// puxando o elemento a partir de sua tag -> array

let p = document.getElementsByTagName('p')
p[1].style.fontFamily = 'arial'


// capturar o elemento pelo primeiro achado do seletor
let seletor = document.querySelector('p.texto')
console.log(seletor)

// capturando o item especificado pelo seletor e mudando sua classe

let seletor2 = document.querySelector('p.texto#segundo')
seletor2.className = 'novaClasse'

console.log(seletor2)

function mudacor(){
    let cor = document.getElementById('cor').value
    document.body.style.backgroundColor = cor
}