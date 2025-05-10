let slideIndex = 0;
showSlides(slideIndex);

// Next / previous
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Go to specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Show one slide at a time
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Optional: autoplay every 5 seconds
setInterval(() => {
  plusSlides(1);
}, 5000);