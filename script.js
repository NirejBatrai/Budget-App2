const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const itemForm2 = document.getElementById('item-form2');
const itemInput2 = document.getElementById('item-input2');
const itemInput3 = document.getElementById('item-input3');
const itemList2 = document.getElementById('item-list2');

const expenditureValue = document.getElementById('expenditure-value');
const balanceValue = document.getElementById('balanceAmount');
let totalBudgetValue = document.getElementById('amount');

let budget = 0;

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;
  if (newItem === '') {
    alert('Please enter your budget');
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  budget = parseInt(newItem);

  itemList.appendChild(li);
  totalBudgetValue.textContent = budget; // Update budget display

  // Update balance
  balanceValue.textContent = budget - parseInt(expenditureValue.textContent);

  itemInput.value = '';
}

itemForm.addEventListener('submit', addItem);

function addItem2(e) {
  e.preventDefault();

  const newItem2 = itemInput2.value;
  const newItem3 = itemInput3.value;

  if (newItem2 === '' || newItem3 === '') {
    alert('Please enter both expense name and amount');
    return;
  }

  const newExpenseItem = `${newItem2}: $${newItem3}`;
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newExpenseItem));

  const expenseAmount = parseInt(newItem3);
  expenditureValue.textContent =
    parseInt(expenditureValue.textContent) + expenseAmount;

  itemList2.appendChild(li);
  itemInput2.value = '';
  itemInput3.value = '';

  balanceValue.textContent = budget - parseInt(expenditureValue.textContent);
}

itemForm2.addEventListener('submit', addItem2);
