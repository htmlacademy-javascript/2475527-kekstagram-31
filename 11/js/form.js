import { isEscapeKey } from './util.js';
import { resetValidator } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

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

const isErrorMessageShown = () => Boolean(document.querySelector('.error'));

const onUploadModalCloseClick = () => {
  closeModal();
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused() && !isErrorMessageShown()) {
    evt.preventDefault();
    closeModal();
  }
}

function openModal() {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadModalClose.addEventListener('click', onUploadModalCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeModal() {
  form.reset();
  resetValidator();
  resetScale();
  resetEffects();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadModalClose.removeEventListener('click', onUploadModalCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

uploadInput.addEventListener('change', openModal);

export { closeModal };
