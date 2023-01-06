//типи подій клавіатури: keypress, keydown, keyup
//-обмеження keypress
//-В-сть KeyboardEvent.key i KeyboardEvent.code

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
}

window.addEventListener('keypress', onKeypress)//'keydown' реагує на натискання будь якої клавіші, а 'keypress' тільки на ввід тексту 
refs.clearBtn.addEventListener('click', onClearOutput)

function onKeypress(event) {
    // console.log(event)
    console.log(event.key)
    //console.log('event.key:', event.key)
    //console.log('event.code:', event.code)
    refs.output.textContent += event.key //в порожньому абзаці буде відображатися все що натисли на клавіатурі під час прослуховування об'єкту window
}

function onClearOutput() {
    refs.output.textContent = ''
}