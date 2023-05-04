import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
form: document.querySelector(`.feedback-form`),
textarea: document.querySelector(`.feedback-form textarea`),
input: document.querySelector("input"),
};

refs.form.addEventListener('input', throttle(onTextareaImput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.input.value.trim() === '' || refs.textarea.value.trim() === '') {
  alert('Заповніть всі поля форми!');
  return;
  }
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  }
  

populateTextarea();



function onTextareaImput(evt) {
formData[evt.target.name] = evt.target.value;
const message = JSON.stringify(formData);
localStorage.setItem(STORAGE_KEY, message);
console.log(formData);
}

function populateTextarea() {
const sevedMessege = JSON.parse(localStorage.getItem(STORAGE_KEY));
if(sevedMessege=== null){
  return;
}
  refs.textarea.value = sevedMessege["message"] || "";
  refs.input.value = sevedMessege["email"] || "";

}
