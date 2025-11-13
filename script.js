
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.style.filter = `hue-rotate(${Math.random()*360}deg)`;
  });
});
