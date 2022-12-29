//в-сть innerHTML = читання і запис

const titleRef = document.querySelector('.title')
// titleRef.innerHTML = '<a href="./">Its link</a>'//заміняємо заголовок на лінк
// titleRef.innerHTML = '' //передавши порожню строку ми видаляємо весь вміст

///////метод  insertAdjacentHTML(position, string);
///////в аргумент position приймає
//"beforebegin" - перед elem
//"afterbegin" - внутри elem, перед всеми детьми
//"beforeend" - внутри elem, после всех детей
//"afterend" - после elem
titleRef.insertAdjacentHTML("beforebegin", '<a>Це 1 link</a>')
titleRef.insertAdjacentHTML("afterbegin", '<a>Це 2 link  </a>')
titleRef.insertAdjacentHTML("beforeend", '<a> Це 3 link</a>')
titleRef.insertAdjacentHTML("afterend", '<a>Це 4 link</a>')
//різниця між appendChild i insertAdjacentHTML в тому що appendChild вставляє DOM вузли, а insertAdjacentHTML вставляє html строки
