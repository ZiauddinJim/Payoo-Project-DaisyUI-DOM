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
  if (amount <= 0) {
    return alert('invalid amount');
  }
  const totalAmount = amount + availableBalance;
  setInnerText(totalAmount);

  const data = {
    name: 'Add Money',
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
  console.log(transactionData);
});

// Cash Out Feature
document.getElementById('btn-cash-out').addEventListener('click', e => {
  e.preventDefault();
  const amount = number('cash-amount');
  const availableBalance = getInnerText('available-balance');
  if (amount <= 0 || amount > availableBalance) {
    return alert('invalid amount');
  }
  const totalAmount = availableBalance - amount;
  setInnerText(totalAmount);

  const data = {
    name: 'Cash Out',
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

//Transaction History
document.getElementById('transaction-history').addEventListener('click', () => {
  const transactionContainer = document.getElementById('transaction-container');
  transactionContainer.innerText = '';
  for (const data of transactionData) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="bg-white border flex justify-between items-center border-gray-300 py-3 px-4 rounded-xl">
            <div class="flex">
              <div class="p-3 w-10 h-10 rounded-full bg-[#F4F5F7]">
                <img src="./assets/wallet1.png" alt="">
              </div>
              <div class="ml-2">
                <p class="font-semibold">${data.name}</p>
                <p class="text-gray-500">${data.date}</p>
              </div>
            </div>
            <div>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
    `;
    transactionContainer.appendChild(div);
  }
});
//Logout feature
document.getElementById('logout').addEventListener('click', () => {
  document.location.href='index.html';
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
