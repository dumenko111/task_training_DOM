// створюємо елемент за допомогою document.createElement() в памяті і 
//добавляємо в розмітку за допомогою appendChild(elem), 
//                                   insertBefore(elem, nextSibling), 
//                                   append(...elems), 
//                                   prepend(...elem)

const titleNewEl = document.createElement('h1')
titleNewEl.classList.add('new_title')
titleNewEl.textContent = 'Its new title'

document.body.appendChild(titleNewEl) //appendChild добавляє елемент в кінець
//////////////////////////////////////////////////////
//добавляємо img в розмітку
const imgRef = document.createElement('img')
imgRef.src = 'https://images.pexels.com/photos/5755160/pexels-photo-5755160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
imgRef.alt = 'palm'
// console.log(imgRef.width) //так можна перевірити чи атрибут буде достпною в-стю
imgRef.width = '400'
document.body.appendChild(imgRef) //appendChild добавляє елемент в кінець

console.log(imgRef)
////////////////////////////////////////////////////////////////////////
//добавляємо ще один лінк в site-nav
const newElListRef = document.createElement('li') //ств. тег li
newElListRef.classList.add('site-nav__item')

const newLinkRef = document.createElement('a') //ств тег а
newLinkRef.href = '/personal'
newLinkRef.classList.add('site-nav__link')
newLinkRef.textContent = 'Особистий кабінет'

newElListRef.appendChild(newLinkRef) //добавляємо тег а в тег li

const siteNavRef = document.querySelector('.site-nav')//отримуємо лінк на список ul
// siteNavRef.appendChild(newElListRef)// добавляємо в кінець ul
// siteNavRef.insertBefore(newElListRef, siteNavRef.firstElementChild)//додаємо лінк в початок ul
siteNavRef.insertBefore(newElListRef, siteNavRef.children[1])//добавляємо li другим елементом списку

//////////////////////////////////////////////////////////////////////
//якщо є два незалежні теги, які не потрібно вставляти один в одного то можна за допопмогою методу append(elem1, elem2) добавити одразу, щоб кожного разу не звертатися до ДОМ
const heroRef = document.querySelector('.hero')

const heroSecondImg = document.createElement('img')
heroSecondImg.src = 'https://images.pexels.com/photos/14397670/pexels-photo-14397670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
heroSecondImg.alt = 'cat'
heroSecondImg.width = 200

const heroTitleRef = document.createElement('h2')
heroTitleRef.textContent = 'Котович'

heroRef.append(heroTitleRef, heroSecondImg)

// append щоб добавити незалежні елементи, appendChild, щоб добавити виноградну гілку елементів


