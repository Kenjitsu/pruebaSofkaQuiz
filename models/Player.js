import { renderPage } from "../App.js";
import { Quiz } from "./Quiz.js";
import { UI } from "./UI.js";

export class Player {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    getPlayerName(value){
        value = document.getElementById('input-name').value;
        return value;
    }

}