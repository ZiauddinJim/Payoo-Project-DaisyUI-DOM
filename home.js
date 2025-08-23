const fixedPin = 1234;

document.getElementById('btn-add-money').addEventListener('click', e => {
  e.preventDefault();
  const bank = document.getElementById('bank').value;
  const accountNumber = document.getElementById('account-number').value;
  const amountAdd = document.getElementById('amount-add').value;
  const addPin = document.getElementById('add-pin').value;
  const availableBalance = parseInt(
    document.getElementById('available-balance').innerText
  );
  if (accountNumber.length < 11 || accountNumber.length > 11) {
    alert('Invalid account number');
    return;
  }
  // Extra use this condition check input amount validation
  if (amountAdd == '' || isNaN(amountAdd)) {
    alert('Not submit amount');
  }
  if (addPin != fixedPin) {
    alert('Wrong pin number');
    return;
  }
  //Balance Sum
  const totalAvailableAmount = availableBalance + amountAdd;
  console.log(totalAvailableAmount);
  // Balance Add
  document.getElementById('available-balance').innerText = totalAvailableAmount;
});

// Toggle Feature
document.getElementById('add-money').addEventListener('click', () => {
  document.getElementById('latest-payment-parent').style.display = 'none';
  document.getElementById('add-money-parent').style.display = 'block';
  document.getElementById('cash-out-parent').style.display = 'none';
  document.getElementById('transfer-money-parent').style.display = 'none';
  document.getElementById('get-bonus-parent').style.display = 'none';
  document.getElementById('pay-bill-parent').style.display = 'none';
  document.getElementById('transaction-history-parent').style.display = 'none';
  document.getElementById('add-money').style.cssText =
    '  display: block; border-radius: 12px; border: 1px solid #0874f2; background: rgba(8, 116, 242, 0.05);';
  document.querySelector('#add-money-text').style.cssText =
    'font-weight: 600;  color: #0874F2;';
  document.getElementById('cash-out').style.cssText = '';
  document.querySelector('#cash-out-text').style.cssText = '';
  document.getElementById('transfer-money').style.cssText = '';
  document.querySelector('#transfer-money-text').style.cssText = '';
});
document.getElementById('cash-out').addEventListener('click', () => {
  document.getElementById('latest-payment-parent').style.display = 'none';
  document.getElementById('add-money-parent').style.display = 'none';
  document.getElementById('cash-out-parent').style.display = 'block';
  document.getElementById('transfer-money-parent').style.display = 'none';
  document.getElementById('get-bonus-parent').style.display = 'none';
  document.getElementById('pay-bill-parent').style.display = 'none';
  document.getElementById('transaction-history-parent').style.display = 'none';
  document.getElementById('add-money').style.cssText = '';
  document.querySelector('#add-money-text').style.cssText = '';
  document.getElementById('cash-out').style.cssText =
    '  display: block; border-radius: 12px; border: 1px solid #0874f2; background: rgba(8, 116, 242, 0.05);';
  document.querySelector('#cash-out-text').style.cssText =
    'font-weight: 600;  color: #0874F2;';
  document.getElementById('transfer-money').style.cssText = '';
  document.querySelector('#transfer-money-text').style.cssText = '';
});
document.getElementById('transfer-money').addEventListener('click', () => {
  document.getElementById('latest-payment-parent').style.display = 'none';
  document.getElementById('add-money-parent').style.display = 'none';
  document.getElementById('cash-out-parent').style.display = 'none';
  document.getElementById('transfer-money-parent').style.display = 'block';
  document.getElementById('get-bonus-parent').style.display = 'none';
  document.getElementById('pay-bill-parent').style.display = 'none';
  document.getElementById('transaction-history-parent').style.display = 'none';
  document.getElementById('add-money').style.cssText = '';
  document.querySelector('#add-money-text').style.cssText = '';
  document.getElementById('cash-out').style.cssText = '';
  document.querySelector('#cash-out-text').style.cssText = '';
  document.getElementById('transfer-money').style.cssText =
    '  display: block; border-radius: 12px; border: 1px solid #0874f2; background: rgba(8, 116, 242, 0.05);';
  document.querySelector('#transfer-money-text').style.cssText =
    'font-weight: 600;  color: #0874F2;';
});
document.getElementById('get-bonus').addEventListener('click', () => {
  document.getElementById('latest-payment-parent').style.display = 'none';
  document.getElementById('add-money-parent').style.display = 'none';
  document.getElementById('cash-out-parent').style.display = 'none';
  document.getElementById('transfer-money-parent').style.display = 'none';
  document.getElementById('get-bonus-parent').style.display = 'block';
  document.getElementById('pay-bill-parent').style.display = 'none';
  document.getElementById('transaction-history-parent').style.display = 'none';
  document.getElementById('add-money').style.cssText = '';
  document.querySelector('#add-money-text').style.cssText = '';
  document.getElementById('cash-out').style.cssText = '';
  document.querySelector('#cash-out-text').style.cssText = '';
  document.getElementById('transfer-money').style.cssText = '';
  document.querySelector('#transfer-money-text').style.cssText = '';
});
document.getElementById('pay-bill').addEventListener('click', () => {
  document.getElementById('latest-payment-parent').style.display = 'none';
  document.getElementById('add-money-parent').style.display = 'none';
  document.getElementById('cash-out-parent').style.display = 'none';
  document.getElementById('transfer-money-parent').style.display = 'none';
  document.getElementById('get-bonus-parent').style.display = 'none';
  document.getElementById('pay-bill-parent').style.display = 'block';
  document.getElementById('transaction-history-parent').style.display = 'none';
  document.getElementById('add-money').style.cssText = '';
  document.querySelector('#add-money-text').style.cssText = '';
  document.getElementById('cash-out').style.cssText = '';
  document.querySelector('#cash-out-text').style.cssText = '';
  document.getElementById('transfer-money').style.cssText = '';
  document.querySelector('#transfer-money-text').style.cssText = '';
});
document.getElementById('transaction-history').addEventListener('click', () => {
  document.getElementById('latest-payment-parent').style.display = 'none';
  document.getElementById('add-money-parent').style.display = 'none';
  document.getElementById('cash-out-parent').style.display = 'none';
  document.getElementById('transfer-money-parent').style.display = 'none';
  document.getElementById('get-bonus-parent').style.display = 'none';
  document.getElementById('pay-bill-parent').style.display = 'none';
  document.getElementById('transaction-history-parent').style.display = 'block';
  document.getElementById('add-money').style.cssText = '';
  document.querySelector('#add-money-text').style.cssText = '';
  document.getElementById('cash-out').style.cssText = '';
  document.querySelector('#cash-out-text').style.cssText = '';
  document.getElementById('transfer-money').style.cssText = '';
  document.querySelector('#transfer-money-text').style.cssText = '';
  document.getElementById('transaction-history').classList.add('btn-card');
});
