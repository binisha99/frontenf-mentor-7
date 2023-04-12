
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let validation=()=> {
  if (email.value == '') {
    email.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    email.innerHTML = 'Email cannot be empty';
    email.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
    );
  } else {
    if (email.value.match(pattern)) {
      email.innerHTML = '';
      email.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
    } else {
      email.setAttribute('style', 'color:hsl(0, 100%, 74%)');
      email.innerHTML = 'invalid email';
      email.setAttribute(
        'style',
        'border-color:hsl(0, 100%, 74%);margin-bottom:3rem;font-style:italic'
      );
    }
  }

  if (firstName.value.length == '') {
    firstName.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    firstName.innerHTML = 'First Name cannot be empty';
    firstName.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem;font-style:italic'

    );
  } else {
    firstName.innerHTML = '';
    firstName.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }

  if (lastName.value.length == '') {
    lastName.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    lastName.innerHTML = 'Last Name cannot be empty';
    lastName.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem;font-style:italic'
    );
  } else {
    lastName.innerHTML = '';
    lastName.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }

  if (password.value.length == '') {
    password.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    password.innerHTML = 'Password cannot be empty';
    password.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem;font-style:italic'
    );
  } else {
    password.innerHTML = '';
    password.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }
}
