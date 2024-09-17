const btnLeft = document.querySelector('.btn-down');
const btnRight = document.querySelector('.btn-up');

const activateSlider = function () {
    const descriptions = document.querySelectorAll('.description');
    const images = document.querySelectorAll('img');
    let curSlide = 0;
    const maxSlide = descriptions.length;

// functions
    const moveSlide = function (s) {
        descriptions.forEach((description, index) => {
            description.style.transform = `translateY(${100 * (index - s)}%)`
        });
        images.forEach((image, index) => {
            image.style.transform = `translateY(${-100 * (index - s)}%)`
        });
    };

    const nextSlide = function () {
        if (curSlide === maxSlide - 1) curSlide = 0;
        else curSlide++;
        moveSlide(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) curSlide = maxSlide - 1;
        else curSlide--;
        moveSlide(curSlide);
    };

    const init = function () {
        moveSlide(0);
    };
    init();

// event listeners
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
};

activateSlider();