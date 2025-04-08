const images = [
  { src: '1.jpg', title: 'Птица' },
  { src: '2.jpg', title: 'Змея' },
  { src: '3.jpg', title: 'Сыр' },
  { src: '4.jpg', title: 'Зиккурат' },
  { src: '5.jpg', title: 'Гриб' },
  { src: '6.jpg', title: 'Гриб' },
  { src: '7.jpg', title: 'Монстр' },
  { src: '8.jpg', title: 'Пустошь' },
  // Добавьте больше изображений по мере необходимости
];

const container = document.querySelector('.container');

images.forEach((image, index) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  if (index === 3) { // Установите активный слайд по умолчанию
    slide.classList.add('active');
  }
  slide.style.backgroundImage = `url(${image.src})`;
  slide.innerHTML = `<h3>${image.title}</h3>`;
  container.appendChild(slide);
});

const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('active');
  });
});

function clearActiveClasses() {
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
}