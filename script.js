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