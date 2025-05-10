const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth + 20; // slide + margin
let index = 0;

function moveSlider() {
  index++;
  if (index > slides.length - 3) { // show 3 at a time
    index = 0;
  }
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

setInterval(moveSlider, 3000); // autoplay every 3 seconds


document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const content = button.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });



  const faqItems = document.querySelectorAll('.casino-bonus-accordion .faq-item');

  faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

