document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('authButton');
  const buttonState = localStorage.getItem('authButtonState');

  if (buttonState === 'disabled') {
    button.disabled = true;
  } else if (buttonState === null) {
    button.disabled = false;
  }

  button.addEventListener('click', () => {
    button.innerText = 'Вы авторизованы';
    button.disabled = true;
    localStorage.setItem('authButtonState', 'disabled');
  });

  if (buttonState === 'disabled') {
    localStorage.setItem('authButtonState', 'disabled');
    button.innerText = 'Вы авторизованы';
  } else if (button.disabled === false) {
    localStorage.removeItem('authButtonState');
    button.innerText = 'Авторизоваться';
  }
});

window.addEventListener('beforeunload', () => {
  const button = document.getElementById('authButton');
  const buttonState = localStorage.getItem('authButtonState');
});
