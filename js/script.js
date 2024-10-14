const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
let currentSlideIndex = 0;

const getSlideWidth = () => slides[0].getBoundingClientRect().width;

const moveToSlide = (index) => {
  const slideWidth = getSlideWidth();
  const newTranslateX = -index * slideWidth;
  track.style.transform = `translateX(${newTranslateX}px)`;
};

nextButton.addEventListener("click", () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex += 1;
  } else {
    currentSlideIndex = 0;
  }
  moveToSlide(currentSlideIndex);
});

prevButton.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex -= 1;
  } else {
    currentSlideIndex = slides.length - 1;
  }
  moveToSlide(currentSlideIndex);
});

window.addEventListener("resize", () => {
  moveToSlide(currentSlideIndex);
});
