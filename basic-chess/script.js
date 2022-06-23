let a1 = document.getElementById(`a1`);
let b1 = document.getElementById(`b1`);
let c1 = document.getElementById(`c1`);
let d1 = document.getElementById(`d1`);
let e1 = document.getElementById(`e1`);
let f1 = document.getElementById(`f1`);
let g1 = document.getElementById(`g1`);
let h1 = document.getElementById(`h1`); 

let a2 = document.getElementById(`a2`);
let b2 = document.getElementById(`b2`);
let c2 = document.getElementById(`c2`);
let d2 = document.getElementById(`d2`);
let e2 = document.getElementById(`e2`);
let f2 = document.getElementById(`f2`);
let g2 = document.getElementById(`g2`);
let h2 = document.getElementById(`h2`); 

let a3 = document.getElementById(`a3`);
let b3 = document.getElementById(`b3`);
let c3 = document.getElementById(`c3`);
let d3 = document.getElementById(`d3`);
let e3 = document.getElementById(`e3`);
let f3 = document.getElementById(`f3`);
let g3 = document.getElementById(`g3`);
let h3 = document.getElementById(`h3`); 

let a4 = document.getElementById(`a4`);
let b4 = document.getElementById(`b4`);
let c4 = document.getElementById(`c4`);
let d4 = document.getElementById(`d4`);
let e4 = document.getElementById(`e4`);
let f4 = document.getElementById(`f4`);
let g4 = document.getElementById(`g4`);
let h4 = document.getElementById(`h4`); 

let a5 = document.getElementById(`a5`);
let b5 = document.getElementById(`b5`);
let c5 = document.getElementById(`c5`);
let d5 = document.getElementById(`d5`);
let e5 = document.getElementById(`e5`);
let f5 = document.getElementById(`f5`);
let g5 = document.getElementById(`g5`);
let h5 = document.getElementById(`h5`); 

let a6 = document.getElementById(`a6`);
let b6 = document.getElementById(`b6`);
let c6 = document.getElementById(`c6`);
let d6 = document.getElementById(`d6`);
let e6 = document.getElementById(`e6`);
let f6 = document.getElementById(`f6`);
let g6 = document.getElementById(`g6`);
let h6 = document.getElementById(`h6`); 

let a7 = document.getElementById(`a7`);
let b7 = document.getElementById(`b7`);
let c7 = document.getElementById(`c7`);
let d7 = document.getElementById(`d7`);
let e7 = document.getElementById(`e7`);
let f7 = document.getElementById(`f7`);
let g7 = document.getElementById(`g7`);
let h7 = document.getElementById(`h7`); 

let a8 = document.getElementById(`a8`);
let b8 = document.getElementById(`b8`);
let c8 = document.getElementById(`c8`);
let d8 = document.getElementById(`d8`);
let e8 = document.getElementById(`e8`);
let f8 = document.getElementById(`f8`);
let g8 = document.getElementById(`g8`);
let h8 = document.getElementById(`h8`);

let square = document.getElementsByClassName(`square`);

a1.addEventListener(`click`, active);

function active() {
    if (square.textContent !== ``) {
        square.className = `active square`;
    }
}