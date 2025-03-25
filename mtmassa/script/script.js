// https://dontpad.com/3mb-terca

function buscador(){
    // caputaro o  value do tipo text
    let pokemon = document.querySelector('#pokemon').value
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon) // url da api
    .then(response=>{
        return response.json()
    }) // informar o formato da resposta
    .then(data => {
        // toda essa parte é apenas pra printar no console, não necessaria, somente necessaria a parte os querrySelector
        console.log(data)
        console.log(data.name)
        console.log(data.id)
        console.log(data.sprites.other['official-artwork'].front_default)
        console.log(data.types.map((elemento)=>{
            return elemento.type.name
        })) // revisar oqtem nessa linha
        // adicionando o src da imagem
        document.querySelector('.imagem').src = data.sprites.other['official-artwork'].front_default
        // adicionando o nome do pokemon
        document.querySelector('.nome').innerHTML = data.name
        // adicionand oo id do diabo
        document.querySelector('.id').innerHTML = data.id
        // adicionando os tipos do pokemon
        document.querySelector('.tipos').innerHTML = data.types.map((elemento)=>{
            return elemento.type.name
        })
    }) // receber a resposta positiva
    .catch(error => {
        console.log(error)
    }) //receber um eventual erro
}
