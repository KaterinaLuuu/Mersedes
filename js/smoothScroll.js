//собираем нужные данные
const linksHeader = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
const newArray = [...linksHeader,mainScroll]


//методом перебора собираем элементы
newArray.forEach(link => {
  link.addEventListener('click', (event) => { //прослушка по клику
    event.preventDefault()

    const ID = event.target.getAttribute('href').substr(1) 
    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})


