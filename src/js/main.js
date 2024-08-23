document.getElementById('subscription-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const input = document.getElementById('input');
  const errorMessage = document.getElementById('error-message');
  const output = document.getElementById('output');

  const emailValue = input.value.trim();


  output.textContent = '';


  if (!emailValue) {
    errorMessage.textContent = 'Email address cannot be empty.';
    errorMessage.style.display = 'block';
    return;
  }


  if (!validateEmail(emailValue)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    errorMessage.style.display = 'block';
    return;
  }


  errorMessage.style.display = 'none';
  output.textContent = `You have entered: ${emailValue}`;
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}