//const navRef = document.querySelector(.sffsfsz) повертає null якщо не знайшло селектор
//const navRef = document.querySelectorAll(.sffsfsz) повертає порожній масив,якщо не знайшло селектор
//також можна шукати не через document(який шукає по всій сторінці), а через якийсь елемент html
//тобто буде шукати в
//const navRef = siteNav.querySelector(.sffsfsz) тепер буде шукати цей селектор не по всій сторінці,
//а буде шукати цей селектор .sffsfsz в тезі siteNav
//або можна використовувати більш специфічі селектори const navRef = document.querySelector(.siteNav .sffsfsz)

const magicBtn = document.querySelector('.magic-btn')


const navRef = document.querySelector('.site-nav')
    console.log(navRef)

const navLinksRef = document.querySelectorAll('.site-nav__link')
    console.log(navLinksRef)

/////////////////////////////////////////////////////////////////////////////////////////

// magicBtn.addEventListener('click', () => {  //розкоментуй
    const imgRef = document.querySelector('.hero__image')
    console.log(imgRef.src) //src стає властивістю об'єкту
    imgRef.src = 'https://images.pexels.com/photos/14430249/pexels-photo-14430249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    imgRef.alt = 'lighthouse'

    const heroTitleRef = document.querySelector('.hero__title')
    console.log(heroTitleRef.textContent)
    heroTitleRef.textContent = 'Змінений заголовок'
// })

// атрибути
/*  getAttribute(ім'я атрибута) частіше використовується хіба remove
    setAttribute(ім'я атрибута) здебільшого звертаємося до атрибута через крапку
    removeAttribute(ім'я атрибута) цей можна юзати, щоб видалити
    hasAttribute(ім'я атрибута)    і цей можна юзати, щоб дізнатися чи має він такий атрибут
    *//////////////////////////////////////////////////////////////////////////////////////////////////////



// отримуємо доступ до всі кнопок через дата атрибут
const actionsButtonRef = document.querySelectorAll('.js-actions button')
console.log(actionsButtonRef[0].dataset.action) //в-сть для того, щоб достукатися до всіх атрибуватів data

// 
magicBtn.addEventListener('click', () => {
    const inputRef = document.querySelector('.js-input')
    console.log(inputRef.value) 
})
//value атрибут збергіє в собі введені дані
//textContent зберігає в собі текст введений між тегами
