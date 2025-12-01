/* ================= Agenda script =================*/











/* ================= FAQ script ================= */
const faqItems = document.querySelectorAll('.qstn');


faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const answer   = item.querySelector('.answer');
    const icon     = item.querySelector('.reveal img');

    question.addEventListener('click', () => {

        faqItems.forEach(other => {
            if (other !== item) {
                other.querySelector('.answer').classList.remove('active');
                other.querySelector('.reveal img').classList.remove('rotate');
            }
        });

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