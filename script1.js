var slides = document.querySelectorAll(".slide2");
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

showSlide(currentSlide);

setInterval(function() {
  showSlide(currentSlide + 1);
}, 2000);