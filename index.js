
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let validation=(event)=> {
  event.preventDefault();
  if (email.value == '') {
    email.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    document.querySelector(".email_error").innerHTML="Filed cannot be empty";
    email.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%);margin-bottom:3rem'
    );
  } else {
    if (email.value.match(pattern)) {
      event.preventDefault();
      email.innerHTML = '';
      email.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
    } else {
      email.setAttribute('style', 'color:hsl(0, 100%, 74%)');
      ddocument.querySelector(".email_error").innerHTML="Inavlid email pattern";
      
      email.setAttribute(
        'style',
        'border-color:hsl(0, 100%, 74%);margin-bottom:3rem;font-style:italic'
      );
    }
  }

  if (firstName.value.length == '') {
    event.preventDefault();
    firstName.setAttribute('style', 'color:hsl(0, 100%, 74%)');
document.querySelector(".firstName_error").innerHTML="field shouldn't be empty"
    firstName.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%)');
  } else {
    firstName.innerHTML = '';
    firstName.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }

  if (lastName.value.length == '') {
    event.preventDefault();
    lastName.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    document.querySelector(".lastName_error").innerHTML="field shouldn't be empty"
    lastName.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%)'
    );
  } else {
    lastName.innerHTML = '';
    lastName.setAttribute('style', 'border-color:hsl(154, 68%, 32%)');
  }

  if (password.value.length == '') {
    event.preventDefault();
    password.setAttribute('style', 'color:hsl(0, 100%, 74%)');
    document.querySelector(".password_error").innerHTML="field shouldn't be empty"
    password.setAttribute(
      'style',
      'border-color:hsl(0, 100%, 74%)'
    );
  } else {
    password.innerHTML = '';
    password.setAttribute('style', 'border-color:hsl(0, 100%, 74%)'
    );
  }
}
