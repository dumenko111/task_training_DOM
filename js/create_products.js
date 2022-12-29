import products from './data/products.js'
//імпортуємо масив об'єктів з іншого файлу 

/////////////////////////////////////////////////
//створюємо карточку продукту

const product = {
    name: 'Сервоприводи',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis molestias, omnis id laboriosam ea ratione',
    price: 2000,
    available: true,
    onSale: true,
}

/*маємо створити таку розмітку
<article class="product">
    <h2 class="product__name">Назва</h2>
    <p class="product__descr">Опис</p>
    <p class="product__price">Ціна</p>
</article>
*/

// const productRef = document.createElement('article')
// productRef.classList.add('product')

// const productNameRef = document.createElement('h2')
// productNameRef.textContent = product.name
// productNameRef.classList.add('product__name')

// const productDescrRef = document.createElement('p')
// productDescrRef.textContent = product.description
// productDescrRef.classList.add('product__descr')

// const productPriceRef = document.createElement('p')
// productPriceRef.textContent = product.price
// productPriceRef.classList.add('product__price')

// productRef.append(productNameRef, productDescrRef, productPriceRef)
// console.log(productRef)
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
const productcContainerRef = document.querySelector('.js-product')
//використовуємо масив об'єктів, який підключили за допомогою import вгорі
//ств карточку одного продукту
const makeProductCardRef = ({name, description, price}) => {
    const productRef = document.createElement('article')
    productRef.classList.add('product')
    
    const productNameRef = document.createElement('h2')
    productNameRef.textContent = name;
    productNameRef.classList.add('product__name')

    const productDescrRef = document.createElement('p')
    productDescrRef.textContent = description
    productDescrRef.classList.add('product__descr')

    const productPriceRef = document.createElement('p')
    productPriceRef.textContent = price
    productPriceRef.classList.add('product__price')

    productRef.append(productNameRef, productDescrRef, productPriceRef)

    return productRef
}

console.log(makeProductCardRef(products[2]))

console.log('//////////////////////////////////////////') // щоб розділити
//створюємо одразу всю к-цію з об'єкту масивів
const collectionCard = products.map(makeProductCardRef)//передаємо колбеком попередню ф-цію, яка створювала одну карточку і map робимо к-цію
console.log(collectionCard)
//

productcContainerRef.append(...collectionCard)
console.log(productcContainerRef)
