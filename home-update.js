const pinFixed = 1234;
const transactionData = [];
//function to get number
const number = id => {
  const idCollection = document.getElementById(id);
  const value = idCollection.value;
  const numberT = parseInt(value);
  return numberT;
};
// function to get value
const textValue = id => {
  const valueT = document.getElementById(id).value;
  return valueT;
};
// function to get innerText
const getInnerText = id => {
  const text = document.getElementById(id).innerText;
  const int = parseInt(text);
  return int;
};
// function to set innerText
const setInnerText = id => {
  const text = document.getElementById('available-balance');
  text.innerText = id;
};
//Add money feature
document.getElementById('btn-add-money').addEventListener('click', e => {
  e.preventDefault();
  const bank = textValue('bank');
  const accountNumber = textValue('account-number');
  const amount = number('amount-add');
  const pin = number('add-pin');
  const availableBalance = getInnerText('available-balance');

  if (accountNumber.length > 11 || accountNumber.length < 11) {
    return alert('Valid pin number submit');
  }
  if (pinFixed !== pin) {
    return alert('Wrong pin number');
  }
  const totalAmount = amount + availableBalance;
  setInnerText(totalAmount);
  const data = {
    name: "Add money",
    date: new data t
  }
});
// Cash Out Feature
document.getElementById('btn-cash-out').addEventListener('click', e => {
  e.preventDefault();
  const amount = number('cash-amount');
  const availableBalance = getInnerText('available-balance');
  const totalAmount = availableBalance - amount;
  setInnerText(totalAmount);
});

//toggle function
const toggleHandler = (id, id1, id2) => {
  //toggle
  const forms = document.getElementsByClassName('form');
  for (const form of forms) {
    form.style.display = 'none';
  }
  document.getElementById(id).style.display = 'block';
  //card color
  const btnForms = document.getElementsByClassName('btn-form');
  for (const btnForm of btnForms) {
    btnForm.classList.remove('btn-card');
  }
  document.getElementById(id1).classList.add('btn-card');
  //card text color
  const btnFormTexts = document.getElementsByClassName('btn-form-text');
  for (const btnFormText of btnFormTexts) {
    btnFormText.classList.remove('btn-card-text');
  }
  document.getElementById(id2).classList.add('btn-card-text');
};

// toggle handler
document.getElementById('add-money').addEventListener('click', () => {
  toggleHandler('add-money-parent', 'add-money', 'add-money-text');
});
document.getElementById('cash-out').addEventListener('click', () => {
  toggleHandler('cash-out-parent', 'cash-out', 'cash-out-text');
});
document.getElementById('transfer-money').addEventListener('click', () => {
  toggleHandler(
    'transfer-money-parent',
    'transfer-money',
    'transfer-money-text'
  );
});
document.getElementById('get-bonus').addEventListener('click', () => {
  toggleHandler('get-bonus-parent', 'get-bonus', 'get-bonus-text');
});
document.getElementById('pay-bill').addEventListener('click', () => {
  toggleHandler('pay-bill-parent', 'pay-bill', 'pay-bill-text');
});
document.getElementById('transaction-history').addEventListener('click', () => {
  toggleHandler(
    'transaction-history-parent',
    'transaction-history',
    'transaction-history-text'
  );
});
