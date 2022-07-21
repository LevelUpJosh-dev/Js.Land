(function Tools() {
    const flashCards = document.querySelectorAll(`.container-fluid .card`);
    flashCards.forEach((element) => {
        element.addEventListener('click', async function (event) {
            event.preventDefault();
            const cardFront = this.querySelector('.card-face.front');
            const cardBack = this.querySelector('.card-face.back');
            this.classList.toggle('is-flipped');
            this.querySelector('.card-face.back').classList.remove('d-none');
            if(this.classList.contains('is-flipped')) {
                cardFront.style.display = 'none';
                cardBack.style.display = 'block';
            } else {
                cardFront.style.display = 'block';
                cardBack.style.display = 'none';
            }
        });
    });
})();
