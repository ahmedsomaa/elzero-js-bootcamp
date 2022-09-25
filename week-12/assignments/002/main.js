const IMAGE_SRC = 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png';
const IMAGE_ALT = 'Elzero Logo';

const images = document.images;

for (let i = 0; i < images.length; i++) {
    images[i].src = IMAGE_SRC;
    images[i].alt = IMAGE_ALT;
}
