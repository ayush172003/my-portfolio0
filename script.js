// Toggle navigation menu on 3-dot click
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.onclick = () => {
  navLinks.classList.toggle('show');
};

// Optional: Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// const canvas = document.getElementById('matrix-bg');
// const ctx = canvas.getContext('2d');
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

// const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
// const fontSize = 14;
// const columns = canvas.width / fontSize;
// const drops = Array.from({ length: columns }, () => 1);

// function draw() {
//   ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   ctx.fillStyle = "#00ff00";
//   ctx.font = `${fontSize}px monospace`;

//   for (let i = 0; i < drops.length; i++) {
//     const text = letters[Math.floor(Math.random() * letters.length)];
//     ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//     if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
//       drops[i] = 0;
//     }

//     drops[i]++;
//   }
// }

// setInterval(draw, 33);
// window.addEventListener("resize", () => {
//   canvas.height = window.innerHeight;
//   canvas.width = window.innerWidth;
// });

