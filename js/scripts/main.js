    var slide_podcast = new Swiper(".slide-podcast", {
      slidesPerView: 4,
      spaceBetween: 32,
      pagination: {
        el: ".s-podcast .top .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".s-podcast .top .btn-next",
        prevEl: ".s-podcast .top .btn-prev",
      },
      speed: 600,
    });