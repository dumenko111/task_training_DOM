//подія submit
//дії браузера по замовчуванню
//в-сть elements
//клас FormData - https://developer.mozilla.org/en-US/docs/Web/Api/FormData

const form = document.querySelector('.js-register-form')

form.addEventListener('submit',onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    console.log('Сабміт форми')

    const mailForm = event.currentTarget.elements.email.value
    const mailPwd = event.currentTarget.elements.password.value
    const subsripForm =event
    console.log(mailForm, mailPwd)
}