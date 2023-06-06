//interaccion de botones de juego
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const gameDiv = document.getElementById("gameDiv");
const htmlGame = "<div class='win-lose'>"+
                    "<p>here goes the result</p>"+
                "</div>"+
                "<div class='results'>"+
                    "<div class='election-card'>"+
                        "<div class='election' id='bot'>"+
                            "<p>Here goes the bot election</p>"+
                        "</div>"+
                        "<p>Bot</p>"
                        "<div class='election-card'>"+
                            "<div class='election' id='player'>"+
                                "<p>here goes the player election</p>"+
                            "</div>"+
                            "<p>Player</p>"+
                        "</div>"+
                    "</div>";

function playRock() {
    console.log("you played rock");
    gameHtml();
}
function playPaper(){
    console.log("you played paper");
    gameHtml();
}
function playScissor(){
    console.log("you played scissors");
    gameHtml();
}
function gameHtml(){
    gameDiv.insertAdjacentElement("afterbegin", htmlGame);
}
rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissor.addEventListener("click", playScissor);