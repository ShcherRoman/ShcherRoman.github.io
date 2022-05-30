$(function () {
    const wrapperText = $('.wrapper h1');
    wrapperText.fadeOut(2000).fadeIn(2000);

    $('.btn-card').click(function () {
        let parent = $(this).parents('.card');
        $(parent).fadeOut(700, function () {
            $(parent).siblings('.cardClicked').fadeIn(700);
        });
    })

    $('.btn-close').click(function () {
        let parentCLick = $(this).parents('.cardClicked');
        $(parentCLick).fadeOut(700, function () {
            $(parentCLick).siblings('.card').fadeIn(700);
        });
    })

    $('.team').children('img').mouseenter(function () {
        let teamWrap = $(this).siblings('.teamWrap');
        $(teamWrap).fadeIn(400, function () {
            $('.team').mouseleave(function () {
                $(teamWrap).fadeOut(400);
            });
        });
    })

    const saycard = $('.saycard');
    const carouselControlPrev1 = $('#carousel-control-prev1');
    const carouselControlNext1 = $("#carousel-control-next1");
    const carousel = $('#carouselExampleIndicators2');
    const carouselIndicators = $('.indicatorsCarousel');

    let cardNumber = 0;
    //saycard[cardNumber].style.display = 'flex';
    carouselIndicators[cardNumber].style.background = 'rgb(109, 246, 235)';
    $(carouselControlNext1).click(slideNext);
    $(carouselControlPrev1).click(slidePrev);
    $(carousel).keydown(pressSlide);

    function slidePrev() {
        if (cardNumber == 0) {
            //   saycard[cardNumber].style.display = 'none';
            $(saycard[cardNumber]).fadeOut(500, function () {
                carouselIndicators[cardNumber].style.background = 'rgb(208, 208, 208)';
                cardNumber = $(saycard).length - 1;
                //     saycard[cardNumber].style.display = 'flex';
                $(saycard[cardNumber]).fadeIn(500);
                carouselIndicators[cardNumber].style.background = 'rgb(109, 246, 235)';

            })
        }
        else {
            //  saycard[cardNumber].style.display = 'none';
            $(saycard[cardNumber]).fadeOut(500, function () {
                carouselIndicators[cardNumber].style.background = 'rgb(208, 208, 208)';
                cardNumber = cardNumber - 1;
                //   saycard[cardNumber].style.display = 'flex';
                $(saycard[cardNumber]).fadeIn(500);
                carouselIndicators[cardNumber].style.background = 'rgb(109, 246, 235)';
            })
        }
    }
    function slideNext() {
        if (cardNumber < $(saycard).length - 1) {
            // saycard[cardNumber].style.display = 'none';
            $(saycard[cardNumber]).fadeOut(500, function () {
                carouselIndicators[cardNumber].style.background = 'rgb(208, 208, 208)';
                cardNumber = cardNumber + 1;
                // saycard[cardNumber].style.display = 'flex';
                $(saycard[cardNumber]).fadeIn(500);
                carouselIndicators[cardNumber].style.background = 'rgb(109, 246, 235)';
            })
        }
        else {
            //saycard[cardNumber].style.display = 'none';
            $(saycard[cardNumber]).fadeOut(500, function () {
                carouselIndicators[cardNumber].style.background = 'rgb(208, 208, 208)';
                cardNumber = 0; // переменная i равна 0
                // saycard[cardNumber].style.display = 'flex';
                $(saycard[cardNumber]).fadeIn(500);
                carouselIndicators[cardNumber].style.background = 'rgb(109, 246, 235)';
            })
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

})

//const team = document.querySelectorAll('.team');
//const teamWrap = document.querySelectorAll('.teamWrap');

//for (let i = 0; i < team.length; i++) {
  //  team[i].addEventListener('mouseenter', function () {
    //    teamWrap[i].style.display = 'block';
   // })
    // team[i].addEventListener('mouseleave', function () {
        //teamWrap[i].style.display = 'none';
    //})
//}


//const card = document.querySelectorAll('.card');
//  const btnCard = document.querySelectorAll('.btn-card');
//const cardClicked = document.querySelectorAll('.cardClicked');
//const btnClosed = document.querySelectorAll('.btn-close');
//for (let i = 0; i < card.length; i++) {
//for (let i = 0; i < card.length; i++) {
//  btnCard[i].addEventListener('click', function () {
//    card[i].style.display = 'none';
//  cardClicked[i].style.display = 'block';
// })
//btnClosed[i].addEventListener('click', function () {
//  card[i].style.display = 'block'; cardClicked[i].style.display = 'none';
//})
//}