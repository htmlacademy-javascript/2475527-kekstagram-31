//import { COMMENTS_SHOW } from './data.js';
const COMMENTS_SHOW = 5;

let currentCount = 0;
let comments = [];

const modalBigPhoto = document.querySelector('.big-picture');
const socialComments = modalBigPhoto.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const socialCommentShowCount = modalBigPhoto.querySelector('.social__comment-shown-count');
//const socialCommentTotalCount = modalBigPhoto.querySelector('.social__comment-total-count');
const commentsLoader = modalBigPhoto.querySelector('.comments-loader');

socialComments.innerHTML = '';
const createComment = ({avatar, name, message}) => {
  const comment = socialComment.cloneNode(true);
  const author = comment.querySelector('.social__picture');
  author.src = avatar;
  author.alt = name;
  comment.querySelector('.social__text').textContent = message;
  return comment;
};
const renderNextComments = () => {
  const fragment = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + COMMENTS_SHOW);
  const renderedCommentsLength = renderedComments.length + currentCount;
  renderedComments.forEach((comment) => {
    const commentItem = createComment(comment);
    fragment.append(commentItem);
  });
  socialComments.append(fragment);

  socialCommentShowCount.textContent = renderedCommentsLength;
  if (renderedCommentsLength >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
  currentCount += COMMENTS_SHOW;
};
const clearComments = () => {
  currentCount = 0;
  socialComments.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', renderNextComments);
};
const renderComments = (photoComments) => {
  comments = photoComments;
  renderNextComments();

  commentsLoader.addEventListener('click', renderNextComments);
};

export {clearComments, renderComments};
/*
//const renderComments = (comments, i = 0, callback) => {
  //const commentsLength = comments.length;
  //const visibleCommentsCount = COMMENTS_SHOW + (COMMENTS_SHOW * i);
  //const invisibleComments = comments.slice(0, visibleCommentsCount);

  //commentsLoader.removeEventListener('click', callback);

  socialComments.innerHTML = '';

  for (const element of invisibleComments) {
    const comment = socialComment.cloneNode(true);
    comment.querySelector('.social__picture').src = element.avatar;
    comment.querySelector('.social__picture').alt = element.name;
    comment.querySelector('.social__text').textContent = element.message;

    socialCommentShowCount.textContent = invisibleComments.length;

    socialComments.append(comment);
  }

  socialCommentTotalCount.textContent = commentsLength;

  if (commentsLength < COMMENTS_SHOW || commentsLength <= visibleCommentsCount) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const clickHandler = () => {
    renderComments(comments, i + 1, clickHandler);
  };

  commentsLoader.addEventListener('click', clickHandler);
};

const clearComments = () => {
  socialComment.forEach((element) => element.remove());
};

export {clearComments, renderComments};
*/
