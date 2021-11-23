const meniu = document.querySelector('#stanghette');
const links = document.querySelector('.meniu');
const navName = document.querySelector('#navbarname');

const displayMenu = () => {
  meniu.classList.toggle('is-active');
  links.classList.toggle('effect');
}
meniu.addEventListener('click', displayMenu);


const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
      if(window.innerWidth <= 900 && menuBars) {
          meniu.classList.toggle('is-active');
          links.classList.remove('effect')
      }
  }

  links.addEventListener('click', hideMobileMenu);
  navName.addEventListener('click', hideMobileMenu);



let stars = document.querySelector('#stars');

const func = () => {
  
  let value = window.scrollY;
  stars.style.left= value * 0.25 + 'px';

  
}
window.addEventListener('scroll', func);



