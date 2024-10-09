import { photos } from './local_carrousel.js';

const $slider_eating_sushi  = document.querySelector('.slider-eating-sushi');
const $before_btn = document.querySelector('#before-btn');
const $after_btn = document.querySelector('#after-btn');

let currentSlide = 0;

const showSlider = (index) => {
    $slider_eating_sushi.innerHTML = '';
    if (index > photos.length - 1 ) {
        index = 0;
    }
    else if (index < 0) {
        index = photos.length - 1;
    }
    const img = document.createElement('img');
    img.src = photos[index];
    img.alt = 'photo';
    $slider_eating_sushi.appendChild(img);
};

const prevSlide = () => {
    if (currentSlide === 0) {
        currentSlide = photos.length - 1;
    } else {
        currentSlide--;
    }
    showSlider(currentSlide);
};

const nextSlide = () => {
    if (currentSlide === photos.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider(currentSlide);
};

$before_btn.addEventListener('click', prevSlide);
$after_btn.addEventListener('click', nextSlide);

showSlider(currentSlide);
