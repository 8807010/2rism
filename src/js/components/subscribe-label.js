const inputSubscribe = document.querySelector('.subscribe__input');
const label = document.querySelector('.subscribe__label');

inputSubscribe.addEventListener('input', () => {
  if (inputSubscribe.value.trim() !== '') {
    label.classList.add('subscribe__label--top');
  } else {
    label.classList.remove('subscribe__label--top');
  }
});
