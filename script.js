let sideBar = document.querySelector('.side-bar')

document.querySelector('#menu-btn').onclick = () => {
  sideBar.classList.toggle('active')
}

document.querySelector('#close-btn').onclick = () => {
  sideBar.classList.remove('active')
}

document.querySelectorAll('.box-container .box ').forEach(accordion => {
  accordion.onclick = () => {
    accordion.classList.toggle('active')
  }
})




var swiper = new Swiper(".home-slider", {
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOninteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});



var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOninteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});






