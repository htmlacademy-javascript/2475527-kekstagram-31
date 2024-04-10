const pictureContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const createPhotos = ({ url, description, likes, comments, id }) => {
  const similarListPhoto = templatePicture.cloneNode(true);
  similarListPhoto.href = url;
  similarListPhoto.dataset.pictureId = id;
  similarListPhoto.querySelector('.picture__img').src = url;
  similarListPhoto.querySelector('.picture__img').alt = description;
  similarListPhoto.querySelector('.picture__comments').textContent = comments.length;
  similarListPhoto.querySelector('.picture__likes').textContent = likes;
  return similarListPhoto;
};

const renderPhotos = (pictures) => {
  const similarListFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const similarListPhoto = createPhotos(picture);
    similarListFragment.append(similarListPhoto);
  });
  pictureContainer.append(similarListFragment);
};

const removePhotos = () => {
  document.querySelectorAll('.picture').forEach((picture) => picture.remove());
};

export { renderPhotos, removePhotos };

