import transaction from "./data/transaction_history.js";
console.log(transaction)

//робимо шаблонну строку з імпортованого масиву об'єктів і робимо наступну розмітку
//<tr>
  //<th>ID транзакції</th>
  // <th>Сума</th>
  //<th>Дата</th>
  //<th>Хто</th>
  //<th>Тип трпзакції</th>
  //<th>Ім'я рахунку</th>
  //<th>Номер рахунку</th>
//</tr>

const makeTableRowMarkup = ({id, amount, date, business, type, name, account}) => {
  return `
  <tr>
      <th>${id}</th>
      <th>${amount}</th>
      <th>${date}</th>
      <th>${business}</th>
      <th>${type}</th>
      <th>${name}</th>
      <th>${account}</th>
  </tr>`
}
console.log(makeTableRowMarkup(transaction[1])) //ств одну транзакцію

const tableRef = document.querySelector('.js-transaction-table')//отримуємо лінц на таблицю

const makeTransactionTableRows = transaction.map(makeTableRowMarkup).join('')//мепаємо весь trnsaction і передаємо колбеком ф-цію вище(отримуємо масив строк) і join('') робимо одну велику строку
tableRef.insertAdjacentHTML('beforeEnd', makeTransactionTableRows)

console.log(tableEl)

