import { isEscapeKey } from './util.js';
import { clearComments, renderComments } from './render-comments.js';

const body = document.querySelector('body');
const modalBigPhoto = document.querySelector('.big-picture');
const bigPhotoCancel = modalBigPhoto.querySelector('.big-picture__cancel');

const openBigPhoto = ({url, likes, comments, description}) => {
  const photo = modalBigPhoto.querySelector('.big-picture__img img');
  photo.src = url;
  photo.alt = description;
  modalBigPhoto.querySelector('.likes-count').textContent = likes;
  modalBigPhoto.querySelector('.social__caption').textContent = description;
  modalBigPhoto.querySelector('.social__comment-total-count').textContent = comments.length;
  renderComments(comments);
};

const onBigPhotoCancelBtn = () => {
  closeModalBigPhoto();
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalBigPhoto();
  }
}

function closeModalBigPhoto () {
  clearComments();
  modalBigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPhotoCancel.removeEventListener('click', onBigPhotoCancelBtn);
  document.removeEventListener('keydown', onDocumentKeydown);
}

function openModalBigPhoto (photo) {
  modalBigPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  openBigPhoto(photo);
  //bigPhotoCancel.addEventListener('click', onBigPhotoCancelBtn);
  document.addEventListener('keydown', onDocumentKeydown);
}
bigPhotoCancel.addEventListener('click', () => {
  closeModalBigPhoto ();
});

export { openModalBigPhoto };
