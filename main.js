import './style.css'

// Starfield Animation
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];

const init = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  
  stars = [];
  const numStars = Math.floor((width * height) / 3000); // Density
  
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      speed: Math.random() * 0.05
    });
  }
};

const animate = () => {
  ctx.clearRect(0, 0, width, height);
  
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
    
    // Twinkle effect
    star.alpha += (Math.random() - 0.5) * 0.05;
    if (star.alpha < 0) star.alpha = 0;
    if (star.alpha > 1) star.alpha = 1;
    
    // Movement (subtle drift)
    star.y -= star.speed;
    if (star.y < 0) star.y = height;
  });
  
  requestAnimationFrame(animate);
};

window.addEventListener('resize', init);
init();
animate();

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
