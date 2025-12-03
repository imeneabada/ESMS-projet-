/* ================= About script =================*/
const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');


playButton.addEventListener('click', () => {
    video.play();
    video.setAttribute('controls', ''); 
    playButton.style.display = 'none';  
});


video.addEventListener('pause', () => {
    playButton.style.display = 'block';
});


video.addEventListener('ended', () => {
    playButton.style.display = 'block';
});

/* ================= Agenda script =================*/
let currentDay = 0;
const days = document.querySelectorAll(".day");

document.getElementById("rightBtn").addEventListener("click", () => {
    days[currentDay].classList.remove("active");
    currentDay = (currentDay + 1) % days.length;
    days[currentDay].classList.add("active");
});

document.getElementById("leftBtn").addEventListener("click", () => {
    days[currentDay].classList.remove("active");
    currentDay = (currentDay - 1 + days.length) % days.length;
    days[currentDay].classList.add("active");
});

/* ================= FAQ script ================= */
const faqItems = document.querySelectorAll('.qstn');

faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const answer   = item.querySelector('.answer');
    const icon     = item.querySelector('.reveal img');

    question.addEventListener('click', () => {
        
        answer.classList.toggle('active');
        icon.classList.toggle('rotate');
    });
});
/* ================= Sponsors script ================= */











const line = document.querySelector('.line1');
const items = Array.from(line.children);


items.forEach(item => {
  line.appendChild(item.cloneNode(true));
});

let scrollPos = 0;
const speed = 1; 

function animate() {
  scrollPos += speed;
  if (scrollPos >= line.scrollWidth / 2) {
    scrollPos = 0; 
  }
  line.style.transform = `translateX(-${scrollPos}px)`;
  requestAnimationFrame(animate);
}


animate();