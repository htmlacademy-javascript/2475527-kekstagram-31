import { openModalBigPhoto } from './render-big-photos.js';

const photosContainer = document.querySelector('.pictures');

const increaseByClick = (photos) => {
  photosContainer.addEventListener('click', (evt) => {
    const clickPhoto = evt.target.closest('.picture');
    if(!clickPhoto) {
      return;
    }
    evt.preventDefault();
    const clickPhotoId = clickPhoto.getAttribute('data-id');
    const targetPhoto = photos.find((photo) => photo.id === +clickPhotoId);

    openModalBigPhoto(targetPhoto);
  });
};
export { increaseByClick };
