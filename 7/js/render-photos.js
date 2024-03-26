import {photoDescription} from './data.js';

const pictureContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const similarPhoto = photoDescription();
const similarListFragment = document.createDocumentFragment();

const renderPhotos = () => {
  similarPhoto.forEach(({id, url, description, comments, likes}) => {
    const similarListPhoto = templatePicture.cloneNode(true);
    similarListPhoto.dataset.pictureId = id;
    similarListPhoto.querySelector('.picture__img').src = url;
    similarListPhoto.querySelector('.picture__img').alt = description;
    similarListPhoto.querySelector('.picture__comments').textContent = comments.length;
    similarListPhoto.querySelector('.picture__likes').textContent = likes;
    similarListFragment.append(similarListPhoto);
  });

  pictureContainer.append(similarListFragment);
};

export { renderPhotos, similarPhoto };
