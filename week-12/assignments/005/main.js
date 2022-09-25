const imgs = document.images;

for (let img of imgs) {
    if (img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Old');
    } else {
        img.setAttribute('alt', 'Elzero New');
    }
}
