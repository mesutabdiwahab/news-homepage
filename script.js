const Navbar = document.querySelector('.nav-bar');
const bar = Navbar.querySelector('img');
const navLinks = document.querySelector('.nav-links');
const MenuClose = navLinks.querySelector('.menu-close img');


function openSideNav(el) {
  if (el.matches('open')) return;
  el.classList.add('open')
}
function closeSideNav(el) {
    return el.classList.remove('open')
}

function handleMenuCloseClick() {
  closeSideNav(navLinks)
}
function handleBarClick() {
  openSideNav(navLinks)
}

bar.addEventListener('click', handleBarClick);
MenuClose.addEventListener('click', handleMenuCloseClick)

