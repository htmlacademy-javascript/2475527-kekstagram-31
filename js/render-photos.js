const pictureContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const createPhotos = ({ url, description, likes, comments, id }) => {
  const similarListPhoto = templatePicture.cloneNode(true);
  const photo = similarListPhoto.querySelector('.picture__img');

  photo.src = url;
  photo.alt = description;

  similarListPhoto.href = url;
  similarListPhoto.dataset.id = id;
  similarListPhoto.querySelector('.picture__likes').textContent = likes;
  similarListPhoto.querySelector('.picture__comments').textContent = comments.length;

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

