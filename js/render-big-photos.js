import { isEscapeKey } from './util.js';
import { similarPhoto } from './render-photos.js';

const body = document.querySelector('body');
const pictureContainer = document.querySelector('.pictures');
const modalBigPhoto = document.querySelector('.big-picture');
const bigPhotoImg = modalBigPhoto.querySelector('.big-picture__img img');
const photoLikes = modalBigPhoto.querySelector('.likes-count');
const socialCaption = modalBigPhoto.querySelector('.social__caption');
const bigPhotoCancel = modalBigPhoto.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPhoto();
  }
};

const closeBigPhotoClick = (evt) => {
  evt.preventDefault();
  closeBigPhoto();
};

const openBigPhoto = (pictureId) => {
  const currentPhoto = similarPhoto.find((photo) => photo.id === Number(pictureId));

  bigPhotoImg.src = currentPhoto.url;
  photoLikes.textContent = currentPhoto.likes;
  socialCaption.textContent = currentPhoto.description;

  modalBigPhoto.classList.remove('hidden');
  bigPhotoCancel.addEventListener('click', closeBigPhotoClick);
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const openModalBigPhoto = () => {
  pictureContainer.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture) {
      evt.preventDefault();
      openBigPhoto(currentPicture.dataset.pictureId);
    }
  });
};

function closeBigPhoto () {
  modalBigPhoto.classList.add('hidden');
  bigPhotoCancel.removeEventListener('click', closeBigPhotoClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

export { openModalBigPhoto };
