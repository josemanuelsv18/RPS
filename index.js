//interaccion de botones de juego
//declaracion de variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const gameDiv = document.getElementById("gameDiv");
const bot = document.getElementById("bot");
const player = document.getElementById("player");
const playedGames = document.getElementById("playedGames");
const wins = document.getElementById("wins");
const loses = document.getElementById("loses");
const draws = document.getElementById("draws");
const again = document.getElementById("again");
const bpBot = 0;
const bpPlayer = 1;
const rockCode = 0;
const paperCode = 1;
const scissorCode = 2;
var play = true;
var selection;
var b;
var win_count = 0;
var lose_count = 0;
var draw_count = 0;
var counter = 0;
const htmlGame = `<div class="win-lose" id="resultDiv">
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
again.addEventListener("click" , playAgain);
//Funciones
//play functions            
function playRock() {
    gameHtml();
    selection=0;
    insertImg(selection, bpPlayer);
    return(selection);
}
function playPaper(){
    gameHtml();
    selection=1;
    insertImg(selection, bpPlayer);
    return(selection);
}
function playScissor(){
    gameHtml();
    selection=2;
    insertImg(selection, bpPlayer);
    return(selection);
}
function playBot(){
    let bot_election;
    bot_election = Math.floor(Math.random()*3);
    insertImg(bot_election, bpBot);
    return(bot_election);
}
//game funcionality
function checkResult(s,b){
    switch(s){
        case 0:
            if(b == 0){
                draw();
            }else if(b == 1){
                lose();
            }else{
                win();
            }
            break;
        case 1:
            if(b == 0){
                win();
            }else if(b == 1){
                draw();
            }else{
                lose();
            }
            break;
        case 2:
            if(b == 0){
                lose();
            }else if(b == 1){
                win();
            }else{
                draw();
            }
            break;
        default:
            alert("error");
            break;
    }
}
function playGame(s){
    while(play == true){
        let player_selection;
        let bot_selection;
        if(s == 0){
            player_selection = playRock();
        }else if(s == 1){
            player_selection = playPaper();
        }else{
            player_selection = playScissor();
    }
        bot_selection = playBot();
        checkResult(player_selection,bot_selection);
        count_played_game();
        play = false;  
    }
}
function playAgain(){
    gameDiv.innerHTML = ""
    play = true;
}
//display result functions
function resultText(r){
    const resultDiv = document.getElementById("resultDiv");
    let texto = document.createElement("p");
    texto.innerHTML = r;
    resultDiv.insertAdjacentElement("afterbegin", texto);
}
function count_played_game(){
    let played_games_score;
    counter++
    played_games_score = "Played Games: " + counter;
    playedGames.innerHTML = played_games_score;
}
function win(){
    let win_score;
    let win_message = "You Won!";
    win_count++
    win_score = "Wins: " + win_count;
    resultText(win_message);
    wins.innerHTML = win_score;
}
function lose(){
    let lose_score;
    let lose_message = "You Lost :(";
    lose_count++;
    lose_score = "Loses: " + lose_count;
    resultText(lose_message);
    loses.innerHTML = lose_score;
}
function draw(){
    let draw_score;
    let draw_message = "It's a draw.";
    draw_count++
    draw_score = "Draws: " + draw_count;
    resultText(draw_message);
    draws.innerHTML = draw_score;
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