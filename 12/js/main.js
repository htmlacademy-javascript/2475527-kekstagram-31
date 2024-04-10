import { getData } from './api.js';
import { setFormSubmit } from './validation.js';
import { errorMessage } from './message.js';
import { renderPhotos } from './render-photos.js';
import { increaseByClick } from './miniatures.js';
import { initFilter } from './filters.js';

getData()
  .then((photos) => {
    renderPhotos(photos);
    increaseByClick(photos);
    initFilter(renderPhotos, photos);
  })
  .catch(() => {
    errorMessage();
  });

setFormSubmit();
