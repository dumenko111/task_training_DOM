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

magicBtn.addEventListener('click', () => {
    const imgRef = document.querySelector('.hero__image')
    console.log(imgRef.src) //src стає властивістю об'єкту
    imgRef.src = 'https://images.pexels.com/photos/14430249/pexels-photo-14430249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    imgRef.alt = 'lighthouse'
})
