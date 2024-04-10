import { debounce } from './util.js';
import { removePhotos } from './render-photos.js';

const AMOUNT_RANDOM_PHOTOS = 10;
const RENDER_DELAY = 500;
const FILTER = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
const filters = document.querySelector('.img-filters');

let currentActiveButton = filters.querySelector('#filter-default');

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const sortByComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const sortRandomly = () => 0.5 - Math.random();

const getFilteredPictures = (filter, photos) => {
  switch (filter) {
    case FILTER.RANDOM: {
      return photos.toSorted(sortRandomly).slice(0, AMOUNT_RANDOM_PHOTOS);
    }

    case FILTER.DISCUSSED:
      return photos.toSorted(sortByComments);

    default:
      return photos;
  }
};

const filterPhotos = (evt, cb, photos) => {
  if (evt.target.classList.contains('img-filters__button')) {
    currentActiveButton.classList.remove(ACTIVE_BUTTON_CLASS);
    currentActiveButton = evt.target;
    currentActiveButton.classList.add(ACTIVE_BUTTON_CLASS);
    const filtersData = getFilteredPictures(evt.target.id, photos);
    cb(filtersData);
  }
};

const initFilter = (cb, photos) => {
  showFilters();
  const getDebouncedFunction = debounce((data) => {
    removePhotos();
    cb(data);
  }, RENDER_DELAY);

  const onFilterBtnClick = (evt) => filterPhotos(evt, getDebouncedFunction, photos);
  filters.addEventListener('click', onFilterBtnClick);
};

export { initFilter };
