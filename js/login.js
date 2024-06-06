
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var loginBtn = document.querySelector('#loginBtn');
var errorMsg = document.querySelector('.errorMsg');
var successMsg = document.querySelector('.successMsg');
var correcttMsg = document.querySelector('.correcttMsg');

var infoList=[];

loginBtn.addEventListener('click', function() {
  loginUser();
});

function loginUser() {
  if (emailInput.value === "" || passwordInput.value === "") {
    errorMsg.classList.remove('d-none');
    successMsg.classList.add('d-none');
    correcttMsg.classList.add('d-none');
  } else {
    if (localStorage.getItem('infoList')) {
      var infoList = JSON.parse(localStorage.getItem('infoList'));
      var emailExists = false;
      var passwordExists = false;

      for (var i = 0; i < infoList.length; i++) {
        if (emailInput.value === infoList[i].email) {
          emailExists = true;
          if (passwordInput.value === infoList[i].password) {
            passwordExists = true;

            localStorage.setItem('name', infoList[i].name);

            break;
          }
        }
      }

      if (emailExists && passwordExists) {
        correcttMsg.classList.add('d-none');
        window.location.href = 'home.html';
      } else {
        correcttMsg.classList.remove('d-none');
        successMsg.classList.add('d-none');
        errorMsg.classList.add('d-none');
      }
    }
  }
}