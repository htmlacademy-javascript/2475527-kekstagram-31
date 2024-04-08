import { openModalBigPhoto } from './render-big-photos.js';

const pictureContainer = document.querySelector('.pictures');

const renderPhotos = (photos) => {
  pictureContainer.addEventListener('click', (evt) => {
    const targetPicture = evt.target.closest('.picture');
    if(!targetPicture) {
      return;
    }
    evt.preventDefault();
    const targetPictureId = targetPicture.getAttribute('data-id');
    const targetPhoto = photos.find((photo) => photo.id === +targetPictureId);

    openModalBigPhoto(targetPhoto);
  });
};

export { renderPhotos };
