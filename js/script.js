const modalElement = document.getElementById("mobileOverlay");
const openBtn = document.getElementById("open-btn");

openBtn.addEventListener("click", () => {
  modalElement.showModal();
  document.body.classList.add("scroll-lock");
});

modalElement.addEventListener("close", () => {
  document.body.classList.remove("scroll-lock");
});

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuItems = document.querySelectorAll('.mobile-overlay__link');

  mobileMenuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      modalElement.close();
      document.body.classList.remove("scroll-lock");
    });
  });
});

modalElement.addEventListener("click", (event) => {
  if (event.target == modalElement) {
    modalElement.close();
    document.body.classList.remove("scroll-lock");
  }
});


let swiperCards = new Swiper(".swiper-services", {
  loop: true,
  spaceBetween: 10,
  autoHeight: true,

  navigation: {
    nextEl: '.btn-next-services',
    prevEl: '.btn-prev-services',
  },

  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1034: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1054: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1310: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});


const swiperProcess = new Swiper('.swiper-process', {

  navigation: {
    nextEl: '.btn-next-process',
    prevEl: '.btn-prev-process',
  },

  breakpoints: {
    714: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1034: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1054: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1310: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },

});

const swiperTech = new Swiper('.swiper-tech', {
  loop: true,

  navigation: {
    nextEl: '.btn-next-tech',
    prevEl: '.btn-prev-tech',
  },

  breakpoints: {
    714: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1034: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1054: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1310: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },

});

const swiperContact = new Swiper('.swiper-contact', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-n',
    prevEl: '.swiper-button-p',
  },

  breakpoints: {
    680: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

});
