// Safe Swiper initialization moved to its own file so it runs after the CDN script
(function initSwiperSafely() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper not loaded; skipping initialization.');
    return;
  }

  try {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
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

    // Expose for debugging if needed
    window._portfolioSwiper = swiper;
  } catch (err) {
    console.error('Failed to initialize Swiper:', err);
  }
})();
