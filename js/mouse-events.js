/*Події мишки
-mouseenter i mouseleave (це ховер)
-mouseover i mouseout
-mousemove (chatty event - балакуча подія)
-Допмат по координатах: https://nerdparadise.com/programming/javascriptmouseposition
-Хороша задачка https://learn.javascript.ru/task/move-ball-field
*/

const boxRef = document.querySelector('.js-box')

// boxRef.addEventListener('mouseenter', onMouseEnter)//спрацьовує коли мишка заходить в границю елементу
// boxRef.addEventListener('mouseleave', onMouseLeave)//спрацьовує коли мишка покадає границю елементу
boxRef.addEventListener('mousemove', onMouseMove)
// boxRef.addEventListener('mouseover', onMouseEnter)
// boxRef.addEventListener('mouseout', onMouseLeave)

function onMouseEnter(event) {
    const box = event.currentTarget
    box.classList.add('box--active')
}
function onMouseLeave(event) {
    const box = event.currentTarget
    box.classList.remove('box--active')
}
function onMouseMove(event) {
    console.log(event)
}
