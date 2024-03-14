//Функция-генератор для получения случайных идентификаторов из указанного диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Функция создания уникального числа
const getUniqueNumber = () => {
  let number = 1;
  return function () {
    return number++;
  };
};

// Функция получения рандомного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getUniqueNumber, getRandomArrayElement};
