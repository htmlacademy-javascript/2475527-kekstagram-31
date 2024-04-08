const SCALE_STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_VALUE = MAX_SCALE_VALUE;

const scale = document.querySelector('.img-upload__scale');
const scaleSmallerBtn = scale.querySelector('.scale__control--smaller');
const scaleBiggerBtn = scale.querySelector('.scale__control--bigger');
const scaleValue = scale.querySelector('.scale__control--value');
const previewPhoto = document.querySelector('.img-upload__preview img');

const changeScale = (value) => {
  previewPhoto.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const increaseScale = () => {
  changeScale(Math.min(
    parseInt(scaleValue.value, 10) + SCALE_STEP, MAX_SCALE_VALUE)
  );
};

const decreaseScale = () => {
  changeScale(Math.max(
    parseInt(scaleValue.value, 10) - SCALE_STEP, MIN_SCALE_VALUE)
  );
};

const resetScale = () => changeScale(DEFAULT_SCALE_VALUE);

scaleSmallerBtn.addEventListener('click', decreaseScale);
scaleBiggerBtn.addEventListener('click', increaseScale);

export { resetScale };
