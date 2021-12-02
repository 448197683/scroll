const links = document.querySelectorAll('.link');
const pages = document.querySelectorAll('.page');
const navBar = document.querySelector('ul');

links.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    pages[index];
    window.scrollTo({
      top: pages[index].offsetTop - navBar.clientHeight,
      behavior: 'smooth',
    });
  });
});

window.addEventListener('scroll', (e) => {
  const threshould = window.innerHeight / 2;
  links.forEach((link, index) => {
    const pageTop = pages[index].getBoundingClientRect().top;
    if (pageTop < threshould) {
      links[index].classList.add('active');
    } else {
      links[index].classList.remove('active');
    }
  });
});
