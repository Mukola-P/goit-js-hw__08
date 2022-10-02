import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(inputElText, 500));
form.addEventListener('submit', submitElForm);
const INPUT_KEY = 'feedback-form-state';
let objectInput = {};

inForm();

function submitElForm(e) {
  e.preventDefault();
  const formEl = e.target.elements;
  const email = formEl.email.value;
  const message = formEl.message.value;
    if (message === '' || email ==="") {
       return alert(`Поля "email" та "message" мають бути заповнені!`);
    }
 
  objectInput = {
    email,
    message,
  };
  console.log(objectInput);

  form.reset();
  localStorage.removeItem(INPUT_KEY);
}

function inputElText(e) {
  objectInput[e.target.name] = e.target.value;
  localStorage.setItem(INPUT_KEY, JSON.stringify(objectInput));
}

function inForm() {
  let saveText = localStorage.getItem(INPUT_KEY);
  if (saveText) {
    saveText = JSON.parse(saveText);
    Object.entries(saveText).forEach(([name, value]) => {
      objectInput[name] = value;
      form.elements[name].value = value;
    });
  }
}
