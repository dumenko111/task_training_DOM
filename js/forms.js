//подія submit
//дії браузера по замовчуванню
//в-сть elements
//клас FormData - https://developer.mozilla.org/en-US/docs/Web/Api/FormData

const form = document.querySelector('.js-register-form')

form.addEventListener('submit',onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    console.log('Сабміт форми')
    // console.log(event)

    // const mailForm = event.currentTarget.elements.email.value //повертає значення email
    // const mailPwd = event.currentTarget.elements.password.value //повертає значення паролю
    // const subsripForm = event.currentTarget.elements.subscription.value //повертає значення радіокнопки
    // console.log(mailForm, mailPwd, subsripForm)


    //----new FormData() зборщик для великої форми - повертає об'єкт
    const formData = new FormData(event.currentTarget)//проходить по всіх інтерактивних елементах форми і збирає з них дані, які потім можна відправляти на сервер 
    console.log(formData) //об'єкт порожній, але його можна перебрати forEach

    formData.forEach((value, name) => {
        console.log('name',name)
        console.log('value', value)
    })
}


