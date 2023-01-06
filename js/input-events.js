//-патерн об'єкт ссилок

//події
//-focus і blur
//-input i change
//-чекбокси і в-сть checked

// const input = document.querySelector('.js-input')//всі ссилки на потрібні елементи
// const nameLabel = document.querySelector('.js-button > span')
// const license = document.querySelector('.js-license')
// const btn = document.querySelector('.js-button')

//використовуємо об'єкт ссилок
const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
}

// refs.input.addEventListener('focus', onInputFocus)
// refs.input.addEventListener('blur', onInputBlur)
// refs.input.addEventListener('input', onInputChange)

refs.input.addEventListener('input', onInputChange)//при введені тексту буде мінятися в кнопці span
refs.licenseCheckbox.addEventListener('change', onLicenseChange)//при виборі чекбоксу кнопка зареєструватися буде ставати активною

function onInputFocus() {
    console.log('Інпут отримав фокус - подія focus')
}

function onInputBlur() {
    console.log('Інпут втратив фокус - подія blur')
}

function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value
    console.log(event.currentTarget.value)
}

function onLicenseChange(event) {
    console.log(event.currentTarget.checked)

    refs.btn.disabled = !event.currentTarget.checked
}