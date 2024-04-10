const EFFECTS = [
  {
    name: 'none',
    filter: 'none',
    min: 0,
    max: 1,
    unit: '',
  },
  {
    name: 'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const DEFAULT_EFFECT = EFFECTS[0];

const preview = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const effectValue = sliderContainer.querySelector('.effect-level__value');
const effectsContainer = document.querySelector('.effects');

let currentEffect = DEFAULT_EFFECT;

const isDefault = () => currentEffect.name === DEFAULT_EFFECT.name;

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const updateSliderOptions = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });

  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;

  updateSliderOptions();
};

const onEffectChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);

  updateSliderOptions();
};

const onSliderUpdate = () => {
  const sliderValue = sliderElement.noUiSlider.get();
  effectValue.value = sliderValue;

  preview.style.filter = isDefault() ? DEFAULT_EFFECT.filter : `${currentEffect.filter}(${sliderValue}${currentEffect.unit})`;
};

hideSlider();
effectsContainer.addEventListener('change', onEffectChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
