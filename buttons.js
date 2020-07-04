import {evolutionImage, evolutionName, moveList} from "./var.js";

let count = 0;
//next
export const next = () => {
    if (count === 0) {
        count++;
        moveList.style.display = "block";
        evolutionImage.style.display = "none";
        evolutionName.style.display = "none";
    } else if (count === 1) {
        count++;
        moveList.style.display = "none";
        evolutionImage.style.display = "block";
        evolutionName.style.display = "block";
    } else {
        count = 0;
        moveList.style.display = "block";
        evolutionImage.style.display = "none";
        evolutionName.style.display = "none";
    }
}

//previous
export const previous = () => {
    console.log("something");
    if (count === 0) {
        count = 2;
        moveList.style.display = "block";
        evolutionImage.style.display = "none";
        evolutionName.style.display = "none";
    } else if (count === 2) {
        count--;
        moveList.style.display = "none";
        evolutionImage.style.display = "block";
        evolutionName.style.display = "block";
    } else {
        count--;
        moveList.style.display = "block";
        evolutionImage.style.display = "none";
        evolutionName.style.display = "none";
    }
}
