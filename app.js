const slider = document.querySelectorAll('.img');
const arrowLeft = document.querySelector('.btn-left');
const arrowRight = document.querySelector('.btn-right');
current = 0;

const reset = function () {
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = 'none';
  }
};

const start = function () {
  reset();
  slider[0].style.display = 'block';
};

const prevSlide = function () {
  reset();
  slider[current - 1].style.display = 'block';
  current--;
};
const nextSlide = function () {
  reset();
  slider[current + 1].style.display = 'block';
  current++;
};

arrowLeft.addEventListener('click', function () {
  if (current === 0) {
    current = slider.length;
  }
  prevSlide();
});

arrowRight.addEventListener('click', function () {
  if (current === slider.length - 1) {
    current = -1;
  }
  nextSlide();
});

start();
