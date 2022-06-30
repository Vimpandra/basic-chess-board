const squares = document.getElementsByClassName(`square`);

Array.from(squares).forEach(sqr => {
    sqr.addEventListener(`click`, function() {
        if(this.classList.contains(`active`)) {
            this.classList.remove(`active`);
        } else {
            let currentActive = document.getElementsByClassName(`active`)[0];
            if (currentActive) {
                this.textContent = currentActive.textContent;
                currentActive.textContent = ``;
                currentActive.classList.remove(`active`);
            } else {
                this.classList.add(`active`);
            }
        }
    })
});

