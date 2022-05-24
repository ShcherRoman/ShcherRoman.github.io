const card = document.querySelectorAll('.card');
const btnCard = document.querySelectorAll('.btn-card');
const cardClicked = document.querySelectorAll('.cardClicked');
const btnClosed = document.querySelectorAll('.btn-close');
for (let i = 0; i < card.length; i++) {
    btnCard[i].addEventListener('click', function () {
        card[i].style.display = 'none';
        cardClicked[i].style.display = 'block';
    })
    btnClosed[i].addEventListener('click', function () {
        card[i].style.display = 'block';
        cardClicked[i].style.display = 'none';
    })
}

const saycard = document.querySelectorAll('.saycard');
const carouselControlPrev1 = document.getElementById('carousel-control-prev1');
const carouselControlNext1 = document.getElementById("carousel-control-next1");
const carousel = document.getElementById('carouselExampleIndicators2');
const carouselIndicators = document.querySelectorAll('.indicatorsCarousel');

let cardNumber = 0;
saycard[cardNumber].style.display = 'flex';
carouselIndicators[cardNumber].style.background = 'rgb(109, 246, 235)';
carouselControlNext1.addEventListener('click', slideNext);
carouselControlPrev1.addEventListener('click', slidePrev);
carousel.onkeydown = pressSlide;

function slidePrev() {
    if (cardNumber == 0) {
        saycard[cardNumber].style.display = 'none';
        carouselIndicators[cardNumber].style.background = 'rgb(208, 208, 208)';
        cardNumber = saycard.length - 1;
        saycard[cardNumber].style.display = 'flex';
        carouselIndicators[cardNumber].style.background = 'rgb(109, 246, 235)';
    }
    else {
        saycard[cardNumber].style.display = 'none';
        carouselIndicators[cardNumber].style.background = 'rgb(208, 208, 208)';
        cardNumber--;
        saycard[cardNumber].style.display = 'flex';
        carouselIndicators[cardNumber].style.background = 'rgb(109, 246, 235)';
    }
}
function slideNext() {
    if (cardNumber < saycard.length - 1) {
        saycard[cardNumber].style.display = 'none';
        carouselIndicators[cardNumber].style.background = 'rgb(208, 208, 208)';
        cardNumber++
        saycard[cardNumber].style.display = 'flex';
        carouselIndicators[cardNumber].style.background = 'rgb(109, 246, 235)';
    }
    else {
        saycard[cardNumber].style.display = 'none';
        carouselIndicators[cardNumber].style.background = 'rgb(208, 208, 208)';
        cardNumber = 0; // переменная i равна 0
        saycard[cardNumber].style.display = 'flex';
        carouselIndicators[cardNumber].style.background = 'rgb(109, 246, 235)';
    }
}
function pressSlide(e) {
    let time = 400;
    switch (e.key) {
        case 'ArrowLeft':
            setTimeout(slidePrev, time);
            break;
        case 'ArrowRight':
            setTimeout(slideNext, time);
            break;
    }
}

const team = document.querySelectorAll('.team');
const teamWrap = document.querySelectorAll('.teamWrap');

for (let i = 0; i < team.length; i++) {
    team[i].addEventListener('mouseenter', function () {
        teamWrap[i].style.display = 'block';
    })
    team[i].addEventListener('mouseleave', function () {
        teamWrap[i].style.display = 'none';
    })
}
