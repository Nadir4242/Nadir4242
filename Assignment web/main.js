// Functionality for showing/hiding the comments section
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.setAttribute('aria-hidden', 'true');

showHideBtn.addEventListener('click', function() {
  const isHidden = commentWrapper.getAttribute('aria-hidden') === 'true';

  if (isHidden) {
    showComments();
  } else {
    hideComments();
  }
});

function showComments() {
  showHideBtn.textContent = 'Hide comments';
  commentWrapper.style.display = 'block';
  commentWrapper.setAttribute('aria-hidden', 'false');
}

function hideComments() {
  showHideBtn.textContent = 'Show comments';
  commentWrapper.style.display = 'none';
  commentWrapper.setAttribute('aria-hidden', 'true');
}

// Functionality for adding a new comment via the comments form
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}
