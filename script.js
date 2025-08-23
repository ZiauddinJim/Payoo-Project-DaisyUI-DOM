document.getElementById('loginBtn').addEventListener('click', function (e) {
  e.preventDefault();
  let numberInput = document.getElementById('username').value;
  let pinInput = document.getElementById('pin-input').value;
  let numberInputConvert = parseInt(numberInput);
  let pinInputConvert = parseInt(pinInput);
  const mobile = 12345678910;
  const pin = 1234;
  if (numberInputConvert == mobile && pinInputConvert == pin) {
    window.location.href = './home.html';
  } else {
    alert('Invalid credentials');
  }
});
