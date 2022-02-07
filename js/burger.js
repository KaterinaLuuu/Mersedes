//собираем нужные данные
const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const menuList = document.querySelector('.menu-list')

// создаем функцию которая будет менять класс
const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  burger.classList.toggle('humburger-menu-active');

  menuList.addEventListener('click', (event) => {
      console.log(event.target) 
      
    if (event.target.classList.contains('menu-list__link')) {
        menuElem.classList.remove('menu-active');
        burger.classList.remove('humburger-menu-active');
    };
  });
};

// menuList.addEventListener('click', (event) => {
//   console.log(event.target);
// });

//при помощи прослушки по клику меняем класс
burger.addEventListener('click', toggleMenu);

