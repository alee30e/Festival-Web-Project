const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = -1;

console.log("Lightbox:", lightbox);
console.log("Prev Button:", prevBtn);
console.log("Next Button:", nextBtn);

images.forEach((image, index) => {
  image.addEventListener('click', function () {
    lightbox.style.display = 'flex';
    lightboxImg.src = this.src;
    currentIndex = index;
  });
});

prevBtn.addEventListener('click', function () {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  lightboxImg.src = images[currentIndex].src;
});

nextBtn.addEventListener('click', function () {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  lightboxImg.src = images[currentIndex].src;
});

[prevBtn, nextBtn].forEach((btn) => {
  btn.addEventListener('mouseenter', (e) => {
    console.log("Hover pe buton:", e.currentTarget);
    e.currentTarget.classList.add('hovered');
  });

  btn.addEventListener('mouseleave', (e) => {
    e.currentTarget.classList.remove('hovered');
  });
});

closeBtn.addEventListener('click', function () {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function (e) {
  if (e.target === e.currentTarget) {
    lightbox.style.display = 'none';
  }
});



