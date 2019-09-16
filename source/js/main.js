$(document).ready(function () {
  // Обработка октрытия/закрытия меню
  $('.js-menu-btn').click(function() {
    $('.js-top-nav').toggleClass('opened'); // Открываем верхнее меню
    $('.js-main-nav').toggleClass('opened'); // Открываем основное меню
    $('.js-menu-btn').toggleClass('js-change'); // Меняем икноку на кнопке 
  });

  // Обработка открытия/закрытия коллапсов.  
  $('.js-collapse__button' ).each(function() { // Находим все кнопки коллапсов 
    $(this).click(function () {  // и добавляем событие клика.
      $(this).parent().parent().toggleClass('collapse--opened'); // По клику добавляется или удаляется класс открытого коллапса. 
    });
  });

  // Обработка переключения табов
  $('.js-tab-trigger').click(function() {
    var id = $(this).attr('data-tab'); // Получили значение атрибута data-tab у текущего элемента
    var content = $('.js-tab-content[data-tab="'+ id +'"]'); // Находим вкладку с этим же аттриботом
       
    $('.js-tab-trigger.js-active').removeClass('js-active'); // Удалили класс active у активной вкладки
    $(this).addClass('js-active'); // Добавили класс active вкладке по которой кликнули
     
    $('.js-tab-content.js-active').removeClass('js-active'); // Удалили класс active у активного контейнера с содержимым
    content.addClass('js-active'); // Добавили класс active контейнеру который должен быть активным
  });
  
  // Инициализируем галерею
  $('[data-fancybox="gallery"]').fancybox({
    thumbs : {
      autoStart : true
    }
  });
  
  // Инициализируем слайдеры
  var mySwiper1 = new Swiper('.js-swiper1', {
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,

    navigation: {
      nextEl: '.js-swiper-button-next1',
      prevEl: '.js-swiper-button-prev1',
    },

    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });


  var mySwiper2 = new Swiper ('.js-swiper2', {

    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    
    pagination: {
      el: '.js-swiper-pagination2',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  })
});