/*Модальне вікно
-1) Відкрити і закрити по кнопці: onOpenModal i onModalClose
-2) Закрити по кліку по бекдропу: onBackDropClick
-3) Закрити по ESC: onEscapeKeypress

- в CSS є клас show-modal, який необхідно добавити на body 
  при відкритті модалки
*/
const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};



refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.backdrop.addEventListener('click', onBackDropClick)

function onOpenModal() {
  window.addEventListener('keydown', onEscapeKeypress)//вішаємо слухача на віндов, щоб реагував на натискання клавіш тільки тоді коли модалка відкрита/ на віндов вішаємо, щоб прослуховути натискання клавіш глобально 
  document.body.classList.add('show-modal');
}
function onCloseModal() {
  window.removeEventListener('keydown', onEscapeKeypress)//знімаємо слухача з віндов, щоб не було реакції на натискання клавіш, коли модалка закрита/ на віндов вішаємо, щоб прослуховути натискання клавіш глобально
  document.body.classList.remove('show-modal')
}
function onBackDropClick(event) {
  //заковика в спливаючих подіях
  // console.log(event.currentTarget)//поточний елемент на якому всплила подія клік по бекдропу
  // console.log(event.target)//цільовий елемент на якому відбулася подія
  if (event.currentTarget === event.target) {//якщо ці події рівні між собою, тобто клік був по бекдропу(сірому полі) закриваємо мадалку
    console.log('клацнули в бекдроп')
    onCloseModal()
  }
}

function onEscapeKeypress(event) {
  console.log(event.code)
  const ESC = 'Escape'
  if (event.code === ESC) {
    onCloseModal()
  }
  
}
