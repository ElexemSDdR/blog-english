export const photos = [
    '../img/local-carrousel/cartel_tamashi.jpeg',
    '../img/local-carrousel/outside_1.jpeg',
    '../img/local-carrousel/kitty.jpeg',
    '../img/local-carrousel/inside_2.jpeg',
    '../img/local-carrousel/soups.jpeg',
    '../img/local-carrousel/kitchen_1.jpeg',
    '../img/local-carrousel/kitchen_2.jpeg',
    '../img/local-carrousel/kitchen_3.jpeg',
    '../img/local-carrousel/kitchen_4.jpeg',
    '../img/local-carrousel/kitchen_5.jpeg'
]

const $slider = document.querySelector('.slider');
const $prevBtn = document.querySelector('#prev-btn');
const $nextBtn = document.querySelector('#next-btn');

let currentSlide = 0;

const showSlide = (index) => {
    if (index > photos.length - 1 ) {
        index = 0;
    }
    else if (index < 0) {
        index = photos.length - 1;
    }
    $slider.innerHTML = '';
    const $img = document.createElement('img');
    $img.src = photos[index];
    $img.alt = 'photo';
    $slider.appendChild($img);
}

const prevSlide = () => {
    if (currentSlide === 0) {
        currentSlide = photos.length - 1;
    } else {
        currentSlide--;
    }
    showSlide(currentSlide);
}

const nextSlide = () => {
    if (currentSlide === photos.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlide(currentSlide);
}

$prevBtn.addEventListener('click', prevSlide);
$nextBtn.addEventListener('click', nextSlide);

showSlide(currentSlide);