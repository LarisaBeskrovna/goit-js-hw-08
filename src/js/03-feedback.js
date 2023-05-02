import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  form: document.querySelector(`.feedback-form`),
  textarea: document.querySelector(`.feedback-form   textarea`),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaImput, 500));
refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
})

populateTextarea();

function onFormSubmit(evt) {
evt.preventDefauit();
evt.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
}

function onTextareaImput(evt) {
 const message = evt.target.value;
 localStorage.getItem(STORAGE_KEY, message) 
}

function populateTextarea() {
 const sevedMessege = localStorage.getItem(STORAGE_KEY);
 if(sevedMessege){
  refs.textarea
 }
}