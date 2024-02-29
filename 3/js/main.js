const NAMES = ['Валентина', 'Иван', 'Анна', 'Максим', 'Юлия', 'Александр', 'Марина', 'Ксения'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'А вы рыбов продаете?',
  'Нет, только показываю',
  'Meow',
  'Nice day!',
  'Всем привет!',
];
const CREATE_POST = 25;

//Функция-генератор для получения случайных идентификаторов из указанного диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// Функция создания уникального числа
const getUniqueNumber = () => {
  let number = 0;
  return function () {
    return number++;
  };
};

// Функция получения рандомного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const idPhoto = getUniqueNumber();
const idComment = getUniqueNumber();
const urlNumber = getUniqueNumber();

const createComment = () => ({
  id: idComment(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDescription = () => ({
  id: idPhoto(),
  url: `photos/${urlNumber()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
});

const photoDescription = Array.from({length: CREATE_POST}, createPhotoDescription);

photoDescription();
