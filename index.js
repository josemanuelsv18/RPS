//interaccion de botones de juego
//declaracion de variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const gameDiv = document.getElementById("gameDiv");
const bot = document.getElementById("bot");
const player = document.getElementById("player");
const gameResult = document.getElementById("gameResult");
const playedGames = document.getElementById("playedGames");
const wins = document.getElementById("wins");
const loses = document.getElementById("loses");
const draws = document.getElementById("draws");
const bpBot = 0;
const bpPlayer = 1;
const rockCode = 0;
const paperCode = 1;
const scissorCode = 2;
var selection;
var b;
var win_count = 0;
var lose_count = 0;
var draw_count = 0;
var counter = 0;
const htmlGame = `<div class="win-lose">
                <p id="gameResult"></p>
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
rock.addEventListener("click", ()=>{playGame(rockCode)});
paper.addEventListener("click", ()=>{playGame(paperCode)});
scissor.addEventListener("click", ()=>{playGame(scissorCode)});
//Funciones            
function playRock() {
    console.log("you played rock");
    gameHtml();
    selection=0;
    insertImg(selection, bpPlayer);
    return(selection);
}
function playPaper(){
    console.log("you played paper");
    gameHtml();
    selection=1;
    insertImg(selection, bpPlayer);
    return(selection);
}
function playScissor(){
    console.log("you played scissors");
    gameHtml();
    selection=2;
    insertImg(selection, bpPlayer);
    return(selection);
}
function playBot(){
    let bot_election;
    bot_election = Math.floor(Math.random()*3);
    console.log(bot_election);
    insertImg(bot_election, bpBot);
    return(bot_election);
}
function checkResult(s,b){
    switch(s){
        case 0:
            if(b == 0){
                console.log("draw");
                draw();
            }else if(b == 1){
                console.log("lose");
                lose();
            }else{
                console.log("win");
                win();
            }
            break;
        case 1:
            if(b == 0){
                console.log("win");
                win();
            }else if(b == 1){
                console.log("draw");
                draw();
            }else{
                console.log("lose");
                lose();
            }
            break;
        case 2:
            if(b == 0){
                console.log("lose");
                lose();
            }else if(b == 1){
                console.log("win");
                win();
            }else{
                console.log("draw");
                draw();
            }
            break;
        default:
            alert("error");
            break;
    }
}
function win(){
    let win_score;
    win_count++
    win_score = "Wins: " + win_count;
    console.log(win_score);
}
function lose(){
    let lose_score;
    lose_count++;
    lose_score = "Loses: " + lose_count;
    console.log(lose_score);
}
function draw(){
    let draw_score;
    draw_count++
    draw_score = "Draws: " + draw_count;
    console.log(draw_score);
}
function playGame(s){
    let player_selection;
    let bot_selection;
    let played_games_score;
    if(s == 0){
        player_selection = playRock();
    }else if(s == 1){
        player_selection = playPaper();
    }else{
        player_selection = playScissor();
    }
    bot_selection = playBot();
    checkResult(player_selection,bot_selection);
    counter++;
    played_games_score = "Played Games: " + counter;
    console.log(played_games_score);
}
function gameHtml(){
    gameDiv.innerHTML= htmlGame;
}
function insertImg(s,bp){
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
//body
