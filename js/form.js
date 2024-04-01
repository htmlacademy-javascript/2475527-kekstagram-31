import { isEscapeKey } from './util.js';
import { validateForm, resetValidator } from './validation.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const uploadInput = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadModalClose = uploadOverlay.querySelector('.img-upload__cancel');
const fieldHashtags = uploadOverlay.querySelector('.text__hashtags');
const fieldDescription = uploadOverlay.querySelector('.text__description');

const isTextFieldFocused = () =>
  document.activeElement === fieldHashtags ||
  document.activeElement === fieldDescription;

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
}

function openModal() {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal() {
  uploadInput.value = '';
  fieldHashtags.value = '';
  fieldDescription.value = '';

  resetValidator();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

uploadInput.addEventListener('change', openModal);
uploadModalClose.addEventListener('click', closeModal);

validateForm();


