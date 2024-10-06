const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      }
  });

  const menuWrapEl = document.querySelector(`.menu_wrap`);
  const subWrapEl = document.querySelectorAll(`.sub_menu_wrap`);
  const menuEl = document.querySelectorAll(`.menu`);
  const submenuEl = document.querySelectorAll(`.sub_menu`);

  for(let i = 0; i < menuEl.length; i++){
    menuEl[i].addEventListener(`mouseover`,() => {
      subWrapEl[i].classList.add(`active`);
    })
  
    menuEl[i].addEventListener(`mouseout`,() => {
      subWrapEl[i].classList.remove(`active`);
    })

    subWrapEl[i].addEventListener(`mouseover`,() => {
      subWrapEl[i].classList.add(`active`);
    })
  
    subWrapEl[i].addEventListener(`mouseout`,() => {
      subWrapEl[i].classList.remove(`active`);
    })
  }

