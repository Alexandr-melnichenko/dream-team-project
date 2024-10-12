import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const forms = document.querySelector('.work-together-form');
const messageInvalid = document.querySelector('.input-signature');
const buttonSendMessage = document.querySelector('.work-together-button');
const validMail = document.querySelector('.input-icon');
const messageText = document.querySelector('.modal-window-paragraph');
const modalWindow = document.querySelector('.work-together-modal');
const closeButtonModal = document.querySelector('.modal-window-button');

const message = {
  email: '',
  message: '',
};

function formObject(event) {
  const form = event.currentTarget;
  const inpyt = form.email.value.trim();
  const textarea = form.message.value.trim();
  message.email = `${inpyt}`;
  message.message = `${textarea}`;
  localStorage.setItem('feedback-form-state', JSON.stringify(message));

  if (inpyt.includes('.') && inpyt.includes('@')) {
    validMail.classList.remove('is-close-input-icon');
    messageInvalid.classList.add('is-close-input-signature');
  } else if (inpyt === '') {
    validMail.classList.add('is-close-input-icon');
    messageInvalid.classList.add('is-close-input-signature');
  } else {
    validMail.classList.add('is-close-input-icon');
    messageInvalid.classList.remove('is-close-input-signature');
  }
}

forms.addEventListener('input', formObject);

async function sendingAsRequest(event) {
  event.preventDefault();
  const input = event.target;
  const yourEmail = input.elements.email.value.trim();
  const textareaMessage = input.elements.message.value.trim();
  try {
    const posts = await postRequest(yourEmail, textareaMessage);
    messageText.textContent = posts.data.message;
    modalWindow.classList.remove('is-close-modal');

    const textarea = document.querySelector('.work-together-textarea');
    const email = document.querySelector('.work-together-input');

    localStorage.removeItem('feedback-form-state');
    message.email = '';
    message.message = '';
    email.value = '';
    textarea.value = '';
    validMail.classList.add('is-close-input-icon');
  } catch (error) {
    iziToast.warning({
      backgroundColor: '#F4A460',
      position: 'center',
      message:
        'Sorry! Something went wrong, please check that all fields are filled in correctly.',
    });
    console.log(error);
  }
}
forms.addEventListener('submit', sendingAsRequest);

async function postRequest(email, comment) {
  try {
    const request = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        email: `${email}`,
        comment: `${comment}`,
      }
    );
    return request;
  } catch (error) {
    console.log(error);
  }
}

function closeWindow(event) {
  modalWindow.classList.add('is-close-modal');
  if (event.key === 'Escape') {
    modalWindow.classList.add('is-close-modal');
  }
}
closeButtonModal.addEventListener('click', closeWindow);
document.addEventListener('keydown', closeWindow);
modalWindow.addEventListener('click', closeWindow);
