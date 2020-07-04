//import variables
import {
    searchButton,
    displayPokemon,
    moveList,
    searchInput,
    idLabel,
    pokemonId,
    evolutionImage,
    evolutionName,
    previousBtn,
    nextBtn
} from "./var.js";
//import previous and next buttons
import {next, previous} from "./buttons.js";

//search pokemon
const searchPokemon = async e => {
    if (e.key === 'Enter') {
        searchButton.click();
        try {
            const inputValue = e.target.value;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
            const data = await response.json();
            console.log(data);
            displayPokemon.src = data.sprites.front_default;
            pokemonId.textContent = `${data.id}`;
            idLabel.style.display = "block";
            AllMoves(data);
            evolution(inputValue);
        } catch (error) {
            alert('Incorrect Pokemon name');
        }
    }
}

//Previous evolution
const evolution = async (inputValue) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${inputValue}`);
    const data = await response.json();
    console.log(data);
    if (data.evolves_from_species !== null) {
        const preEvoName = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.evolves_from_species.name}`);
        const preEvoImage = await preEvoName.json();
        evolutionImage.src = preEvoImage.sprites.front_default;
        evolutionName.textContent = data.evolves_from_species.name;
    } else {
        evolutionImage.style.display = "none";
        evolutionName.textContent = "No evolution found";
    }
}

//all in one function
const AllMoves = (data) => {
    //get pokemon moves
    let pokemonMoves = [];
    const getMoves = () => {
        for (let i = 0; i < data.moves.length; i++) {
            let endResult = data.moves[i].move.name;
            pokemonMoves.push(endResult);
        }
    }
    getMoves()
    //get four random moves
    let fourMoves = [];
    const random = () => {
        let randomMoves = [];
        let temp = [];
        //backward iteration
        for (let i = pokemonMoves.length - 1; i > 0; i--) {
            randomMoves = Math.floor(Math.random() * (i + 1));
            temp = pokemonMoves[i];
            pokemonMoves[i] = pokemonMoves[randomMoves];
            pokemonMoves[randomMoves] = temp;
        }
        return pokemonMoves;
    };
    random();
    fourMoves = pokemonMoves.slice(0, 4);

    //generate four lists
    for (let i = 0; i < fourMoves.length; i++) {
        let fourList = document.createElement("li");
        let movesInList = document.createTextNode(fourMoves[i]);
        fourList.appendChild(movesInList);
        moveList.appendChild(fourList);
    }
}


//next button
nextBtn.addEventListener('click', next);

//previous button
previousBtn.addEventListener('click', previous);

//search button
searchInput.addEventListener('keydown', searchPokemon);