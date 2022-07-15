let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-box button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let botPlayer;

// Contador de jogadas;
let player1 = 0;
let player2 = 0;


// Adicionando o evento de click aos boxes;
for (let i = 0; i < boxes.length; i++) {

    // Quando alguém clica na caixa;
    boxes[i].addEventListener("click", function () {

        let elemento = verificaJogador(player1, player2);

        // Verifica se já tem x ou o;
        if (this.childNodes.length == 0) {
            let cloneElemento = elemento.cloneNode(true);

            this.appendChild(cloneElemento);

            // Computar a jogada
            if (player1 == player2) {
                player1++;

                // Função executa a jogada
                if(secondPlayer == "bot-player"){
                    computerPlay();
                    player2++;
                }
            } else {
                player2++
            }

            // Verifica quem venceu
            verificaVencedor();
        }
    });
}

// Evento para selecionar o tipo de jogo
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click",function() {
        secondPlayer = this.getAttribute("id");
        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide")
        }, 500);
    });
}

// Verifica quem vai jogar;
function verificaJogador(player1, player2) {
    if (player1 == player2) {
        elemento = x;
    } else {
        elemento = o;
    }

    return elemento;
}


// Verica o ganhador;
function verificaVencedor() {
    let b1 = document.getElementById("block-1")
    let b2 = document.getElementById("block-2")
    let b3 = document.getElementById("block-3")
    let b4 = document.getElementById("block-4")
    let b5 = document.getElementById("block-5")
    let b6 = document.getElementById("block-6")
    let b7 = document.getElementById("block-7")
    let b8 = document.getElementById("block-8")
    let b9 = document.getElementById("block-9")


    // horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
            declareWinner('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declareWinner('o');
        }
    }
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
            declareWinner('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declareWinner('o');
        }
    }
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
            declareWinner('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }

    // Vertical
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
            declareWinner('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
            declareWinner('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o');
        }
    }
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
            declareWinner('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }

    // Diagonal;
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
            declareWinner('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o');
        }
    }
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
            declareWinner('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declareWinner('o');
        }
    }


    // Verificando se deu velha
    let counter = 0;
    for (i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if (counter == 9) {
        declareWinner("Deu velha!");
    }
}


// Declarar o vencedor
function declareWinner(winner) {
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = '';

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if (winner == 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Deu velha!";
    }

    // Exibe a mensagem
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // Esconde mensagem
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 3000);

    // Zera as jogadas
    player1 = 0;
    player2 = 0;

    // Remove x e o
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

// Execitar a lógica do BOT;
function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        // Só preenche se o filho estiver vazio
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }

        // Checagem de quantas estão preenchidas 
        } else {
            filled++;
        }
    }

    if(counter == 0 && filled < 9){
        computerPlay();
    }
}