//працюємо з класами

const magicBtn = document.querySelector('.magic-btn')

const navRef = document.querySelector('.site-nav')
navRef.classList.add('new-class', 'super-class') //добавляє
navRef.classList.remove('site-nav', 'super-class') //видаляє
navRef.classList.replace('new-class', 'site-nav') //видаляє new-class і добавляє site-nav 
// navRef.classList.toggle() //якщо такого класу немає - добавляє, якщо є - видаляє
//ще є метод contains, перевіряє чи є такий клас, повертає буль 
// console.log(navRef.classList.contains('afssf'))

/////////////////////////////////////////////////////////////////////////////
//робимо що б на лінк портфоліо мінявся колір
    const navLinkRef = document.querySelector(`.site-nav__link[href="${'/portfolio'}"]`)//вибирає тільки той силектор атрибут якого має адресу /portfolio
    console.log(navLinkRef)
    navLinkRef.classList.add('site-nav__link-current')
