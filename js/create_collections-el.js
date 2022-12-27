//створюємо і добавляємо колекцію кнопок

const colorPickerOptions = [
    { label: 'red', color: '#f44336' },
    { label: 'green', color: '#4caf50' },
    { label: 'blue', color: '#2196f3' },
    { label: 'grey', color: '#607d8b' },
    { label: 'pink', color: '#e91e63' },
    { label: 'indigo', color: '#3f51b5' },
]

const colorPickerRef = document.querySelector('.color-picker')

// const elements = []
//ЦЕ ОЛДУСКУЛ, ВСЕ МОЖНА ЗРОБИТИ ЧЕРЕЗ map
// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//     const colorButtonRef = document.createElement('button')
//     colorButtonRef.textContent = colorPickerOptions[i].label
//     colorButtonRef.type = 'button'
//     colorButtonRef.style.backgroundColor = colorPickerOptions[i].color

//     elements.push(colorButtonRef)
// }
// console.log(elements)
// colorPickerRef.append(...elements)


const buttonRef = colorPickerOptions.map(el => {
    const buttonEl = document.createElement('button')
    buttonEl.type = 'button'
    buttonEl.textContent = el.label
    buttonEl.style.backgroundColor = el.color

    return buttonEl
})
// colorPickerRef.append(...buttonRef)

///////////////////////////////////////////////////////////////////
//ПИШЕМО Ф-ЦІЮ ЯКА БУДЕ ПРИЙМАТИ ВХІДНІ ДАНІ І СТВОРЮВАТИ КОЛЕКЦІЮ КНОПОК
const createColorPickerButton = (option) => {
    return option.map(el => {
        const buttonEl = document.createElement('button')
        buttonEl.type = 'button'
        buttonEl.textContent = el.label
        buttonEl.style.backgroundColor = el.color

        return buttonEl
    })
}
const elementsButt = createColorPickerButton(colorPickerOptions)
colorPickerRef.append(...buttonRef)