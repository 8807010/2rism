let btnToTop = document.querySelector('.footer__btn-to-top');
let page = window.innerWidth;

btnToTop.onclick = function () {
  window.scrollTo(0, 0);
};

// window.onscroll = function () {
//   if (window.pageYOffset > 200) {
//     btnToTop.classList.add('shown');
//   } else if (page <= 768 && btnToTop.contains.classList('shown')) {
//     btnToTop.classList.remove('shown');
//   } else {
//     btnToTop.classList.remove('shown');
//   };
// };


window.onscroll = function () {
  if (window.pageYOffset > 200) {
    btnToTop.classList.add('shown');
  } else if (page <= 768) {
    btnToTop.style.opacity = 0;
  } else {
    btnToTop.classList.remove('shown');
  };
};

