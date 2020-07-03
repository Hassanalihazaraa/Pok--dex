//import variables
import {searchInput, pokemonPic, moveList} from "./var.js";


//search pokemon
const searchPokemon = async e => {
    if (e.key === 'Enter') {
        try {
            const inputValue = e.target.value;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
            const data = await response.json();
            console.log(data);
            pokemonPic.src = data.sprites.front_default;
            getMoves(data);
        } catch (error) {
            alert('Incorrect Pokemon name');
        }
    }
}
//get pokemon moves
let pokemonMoves = [];
const getMoves = (data) => {
    for (let i = 0; i < data.moves.length; i++) {
        let endResult = data.moves[i].move.name;
        pokemonMoves.push(endResult);
    }
}

let movesRandom,
    temp;
//this will exchange values of array, iterate through array backwards
for (let i = pokemonMoves.length - 1; i > 0; i--) {
    movesRandom = Math.floor(Math.random() * (i + 1));
    temp = pokemonMoves[i];
    pokemonMoves[i] = pokemonMoves[movesRandom];
    pokemonMoves[movesRandom] = temp;
}
pokemonMoves.slice(0, 4);

//search button
searchInput.addEventListener('keydown', searchPokemon);