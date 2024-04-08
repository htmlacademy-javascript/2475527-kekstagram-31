//import { COMMENTS_SHOW } from './data.js';
const COMMENTS_SHOW = 5;

const modalBigPhoto = document.querySelector('.big-picture');
const socialComments = modalBigPhoto.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const socialCommentShowCount = modalBigPhoto.querySelector('.social__comment-shown-count');
const socialCommentTotalCount = modalBigPhoto.querySelector('.social__comment-total-count');
const commentsLoader = modalBigPhoto.querySelector('.comments-loader');

const renderComments = (comments, i = 0, callback) => {
  const commentsLength = comments.length;
  const visibleCommentsCount = COMMENTS_SHOW + (COMMENTS_SHOW * i);
  const invisibleComments = comments.slice(0, visibleCommentsCount);

  commentsLoader.removeEventListener('click', callback);

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
