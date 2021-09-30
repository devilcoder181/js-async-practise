"use strict"

const getPokemon = ()=> {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => {
        return res.json();
    }).then(data => {
        console.log(data)
    })
}

getPokemon();