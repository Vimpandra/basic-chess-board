// user clicks the piece they want to move
// the selected piece gets highlighted
// start listening for a new click

let squares = document.querySelectorAll(`.square`);
let activeSquares = document.querySelectorAll(`.active`);

// This condition needs to check if there's any square with the class .active in REAL TIME
if (activeSquares.length > 0) {
    squares.forEach(square => {
        square.addEventListener(`click`, movePiece);

        function movePiece() {
            let pieceToMove = document.querySelector(`.active`).textContent;
            square.textContent = pieceToMove;
        }
    });
} else {
    squares.forEach(square => {
        square.addEventListener(`click`, selectPiece);
        
        function selectPiece() {
            square.className = `active square`;
        }
    });
}

// the next click indicates the destination to wich the piece moves
// the piece disappears from the original spot
// the selected piece overwrittes anything previously on the selected spot
// program goes back to listening for the piece selection click
