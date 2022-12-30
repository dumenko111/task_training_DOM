//ПОДІЇ
//Створення і видалення слухачів подій
//іменовані колбеки для слухачів
//  handle*: handleEvent або handleSubjectEvent
//  *Handler: eventHandler або subjectEventHandler
//  on*: onEvent або onSubjectEvent
//ссилочна ідентичність колбеків
//-Об'єкт подій
//посилання на список всіх доступний подій: https://developer.mozilla.org/en-US/docs/Web/Events

const targetBtn = document.querySelector('.js-target-btn')
const addListenerBtn = document.querySelector('.js-add-listener')
const removeListenerBtn = document.querySelector('.js-remove-listener')

function handleBtnClick (event) { //колбек буду передавати у ф-ції добавити і зняти слухача подій
    console.log('Клік по центральній кнопці')
}

addListenerBtn.addEventListener('click', (event) => { //добавляємо слухача подій
    console.log(event)
    console.log('добавили слухача подій на центр. кнопку')
    
    targetBtn.addEventListener('click', handleBtnClick)//передаємо в колбек ф-цію handleBtnClick, щоб знімати і ставити одну і ту саму ф-цію, яка передається по ссилці
})

removeListenerBtn.addEventListener('click', (event) => {
    console.log('знімаємо слухача подійз центр. кнопки')

    targetBtn.removeEventListener('click', handleBtnClick)//передаємо в колбек ф-цію handleBtnClick, щоб знімати і ставити одну і ту саму ф-цію, яка передається по ссилці
})