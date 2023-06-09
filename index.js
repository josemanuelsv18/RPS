//interaccion de botones de juego
//declaracion de variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const gameDiv = document.getElementById("gameDiv");
const bot = document.getElementById("bot");
const player = document.getElementById("player");
const bpBot = 0;
const bpPlayer = 1;
var selection;
const htmlGame = `<div class="win-lose">
                <p>here goes the result</p>
            </div>
            <div class="results">
                <div class="election-card">
                    <div class="election" id="bot">
                        <img src="" alt="" id="imgBot">  
                    </div>
                    <p>Bot</p>
                </div>
                <div class="election-card">
                    <div class="election" id="player">
                        <img src="" alt="" id="imgPlayer">
                    </div>
                    <p>Player</p>
                </div>  
            </div>`;
//interacciones
rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissor.addEventListener("click", playScissor);
//Funciones            
function playRock() {
    console.log("you played rock");
    gameHtml();
    selection=0;
    insertImg(selection, bpPlayer);
}
function playPaper(){
    console.log("you played paper");
    gameHtml();
    selection=1;
    insertImg(selection, bpPlayer);
}
function playScissor(){
    console.log("you played scissors");
    gameHtml();
    selection=2;
    insertImg(selection, bpPlayer);
}
function gameHtml(){
    gameDiv.innerHTML=htmlGame;
}
function insertImg(s,bp){
    s = selection;
    let imgBot =  document.getElementById("imgBot");
    let imgPlayer = document.getElementById("imgPlayer");
    let imgElement;
    if(bp == bpPlayer){
        imgElement = imgPlayer;
    }else{
        imgElement = imgBot;
    }
    switch (s) {
        case 0:
            imgElement.src="./img/rock.png"
            imgElement.alt="Rock image";
            break;
        case 1:
            imgElement.src="./img/paper.png"
            imgElement.alt="Paper image";
            break;
        case 2:
            imgElement.src="./img/scissors.png"
            imgElement.alt="Scissor image";
            break;
        default:
            alert("Error");
            break;
    }
}