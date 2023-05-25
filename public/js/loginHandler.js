function updateUsername() {
  const userElement = document.querySelector('#loggedInUser');
  const clientData = localStorage.getItem('Client');
  if (clientData) {
    const data = JSON.parse(clientData);
    if (data.user) {
      userElement.innerHTML = data.user.email;
      userElement.style.display = 'block';
      userElement.style.marginTop = '0px';
      userElement.style.marginRight = '10px';
      userElement.style.color = '#a86d7b';
      document.getElementById('signInButton').style.display = 'none';
    }
  } else {
    userElement.style.display = 'none';
    document.getElementById('signInButton').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateUsername();
});

function signInOnClick() {
  let email = document.getElementById('signInEmail').value.trim();
  let password = document.getElementById('signInPassword').value.trim();
  let userData = JSON.stringify({
    formFields: [
      { id: 'email', value: email },
      { id: 'password', value: password },
    ],
  });
  fetch('api/auth/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: userData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data['status'] === 'OK') {
        localStorage.setItem('Client', JSON.stringify(data));
        window.location.href = `${location.protocol}//${location.host}/index`;
        localStorage.setItem('loggedInUser', data.user.name);
        document.getElementById('signInButton').style.display = 'none';
        document.addEventListener('DOMContentLoaded', function () {
          let userElement = document.getElementById('loggedInUser');
          userElement.style.display = 'block';
          userElement.textContent = data.user.name;
        });
      } else {
        alert('Ошибка: ' + JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
}

function signUpOnClick() {
  let password = document.getElementById('signUpPassword').value.trim();
  let name = document.getElementById('signUpName').value.trim();
  let email = document.getElementById('signUpMail').value.trim();
  let userData = JSON.stringify({
    formFields: [
      { id: 'name', value: name },
      { id: 'password', value: password },
      { id: 'email', value: email },
    ],
  });
  fetch('api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: userData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data['status'] === 'OK') {
        localStorage.setItem('Client', JSON.stringify(data));
        window.location.href = `${location.protocol}//${location.host}/index`;
      } else {
        alert('Ошибка: ' + JSON.stringify(data));
      }
    })
    .catch((error) => {
      console.log(error);
      alert(error);
    });
}
