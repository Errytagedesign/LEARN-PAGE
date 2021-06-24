// PASSWORD VISIBILITY EYE ICON TOGGLE

let eye = document.querySelector('.toggle-pass');
let pass = document.querySelector('#password');

eye.addEventListener('click', () => {
  if (eye.classList.contains('bi-eye-slash')) {
    eye.classList.remove('bi-eye-slash');
    eye.classList.add('bi-eye');
    pass.type = 'text';
  } else if (eye.classList.contains('bi-eye')) {
    pass.type = 'password';
    eye.classList.remove('bi-eye');
    eye.classList.add('bi-eye-slash');
  }
});
