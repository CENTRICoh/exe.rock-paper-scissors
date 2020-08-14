const player = 'X';
const computer = 'O';

let board_full = false;
const board_container = document.querySelector('.play-area');

let play_board =["","","","","","","","",""];

const render_board = () => {
     board_container.innerHTML ='';
     play_board.forEach((e, i) => {
          board_container.innerHTML += 
          `<div id="block_${i}" class="block" onClick="addPlayerMove(${i})">${play_board[i]}</div>`
           if (e == player || e == computer) {
               document.querySelector(`#block_${i}`).classList.add("occupied");
           }
     });
}

const  check_board_complete = () => {
    let flag = true;
    play_board.forEach(element => {
        if (element != player && element != computer) {
            flag = false;

        }
    });
    board_full = flag;
}

const check_line = (a, b, c) => {
    return (
        play_board[a] == play_board[b] &&
        play_board[b] == play_board[c] &&
        (play_board[a] == player || play_board[a] == computer)
    );
}

const check_match = () => {
    for (i = 0; i < 9; i += 3) {
        if (check_line(i, i + 1, i +2)) {
            document.querySelector(`#block_${i}`).classList.add("win");
            document.querySelector(`#block_${i + 1}`).classList.add("win");
            document.querySelector(`#block_${i + 2}`).classList.add("win");
            return play_board[i];
        }
    }
    for (i = 0; i < 3; i++) {
        if (check_line(i, i + 3, i + 6)) {
            document.querySelector(`#block_${i}`).classList.add("win");
            document.querySelector(`#block_${i + 3}`).classList.add("win");
            document.querySelector(`#block_${i + 6}`).classList.add("win");
            return play_board[i]
        }
    }
       if (check_line(0, 4, 8)) {
           document.querySelector("#block_0").classList.add("win");
           document.querySelector("#block_4").classList.add("win");
           document.querySelector("#block_8").classList.add("win");
           return play_board[0];
}
        if (check_line(2, 4, 6)) {
             document.querySelector("#block_2").classList.add("win");
             document.querySelector("#block_4").classList.add("win");
             document.querySelector("#block_6").classList.add("win");
            return play_board[2];
}
return "";
};

const check_for_winner = () => {
    let res = check_match();
    if (res == player) {
        winner.innerText = "YOU WON!!";
        winner.classList.add("playerWin");
        board_full = true
    }   else if (res == computer) {
        winner.innerText = "The computer won :(";
        winner.classList.add("computerWin");
        board_full = true
    }   else if (board_full) {
        winner.innerText = "Oh snap, it's a tie!";
        winner.classList.add("draw");
    }
}









const game_loop = () => {
    render_board();
    check_board_complete();
    check_for_winner();

}


const addPlayerMove = (e) => {
     if (!board_full && play_board[e] == "") {
         play_board[e] = player;
        game_loop()
         addComputerMove();
        }
    }

const addComputerMove = () => {
     if (!board_full) {
         do {
          selected = Math.floor(Math.random() * 9);
     } while(play_board[selected] != '');
    play_board[selected] = computer;
    game_loop();
     }
};

 const reset_board = () => { 
play_board =["","","","","","","","",""];
board_full = false;
winner.classList.remove("PlayerWins!!");
winner.classList.remove("ComputerWin");
winner.classList.remove("Draw");
winner.innerText = "";
 render_board();

 };

 render_board();


