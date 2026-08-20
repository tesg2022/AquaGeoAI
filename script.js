
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const menu=document.querySelector('.menu');
const navlinks=document.querySelector('.navlinks');
if(menu) menu.addEventListener('click',()=>navlinks.classList.toggle('open'));
