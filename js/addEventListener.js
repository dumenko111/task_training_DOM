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