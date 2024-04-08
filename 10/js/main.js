import { getData } from './api.js';
//import { openModalBigPhoto } from './render-big-photos.js';
import { setFormSubmit } from './validation.js';
import { showGalleryErrorMessage } from './message.js';
import { renderPhotos } from './render-photos.js';

getData()
  .then((photos) => {
    //openModalBigPhoto(photos);
    renderPhotos(photos);
  })
  .catch(() => {
    showGalleryErrorMessage();
  });

setFormSubmit();
