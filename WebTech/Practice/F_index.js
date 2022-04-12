const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');
form.addEventListener('submit', e => e.preventDefault());
// run function when the 'Say hello' button is clicked
submitBtn.addEventListener('click', () => {
    // store the entered name in web storage
    localStorage.setItem('name', nameInput.value);
    // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
    nameDisplayCheck();
  });
// run function when the 'Forget' button is clicked
forgetBtn.addEventListener('click', () => {
    // Remove the stored name from web storage
    localStorage.removeItem('name');
    // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
    nameDisplayCheck();
  });
    