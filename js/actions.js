// menu

let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar');
});

// slider

const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}

btnRight.addEventListener("click", Next);
btnLeft.addEventListener("click", Prev);

setInterval(Next, 5000);