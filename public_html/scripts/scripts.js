const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
})
const filter = document.querySelector('.filter');
window.addEventListener('scroll', () => {
    filter.classList.toggle('sticky', window.scrollY > 0);
})