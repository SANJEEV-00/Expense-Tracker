const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const totalAmount = document.getElementById('totalAmount');

let total = 0;

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('expenseName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);

    total += amount;

    const li = document.createElement('li');
    li.textContent = `${name}: $${amount.toFixed(2)}`;
    expenseList.appendChild(li);

    totalAmount.textContent = total.toFixed(2);

    expenseForm.reset();
});
