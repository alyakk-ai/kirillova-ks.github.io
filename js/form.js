const signInButton = document.querySelector('.signin-button');
const signUpButton = document.querySelector('.signup-button');
const forms = document.querySelector('.forms');
const wrapper = document.querySelector('.wrapper');

signUpButton.addEventListener('click', function() {
    forms.classList.add('active');
    wrapper.classList.add('active');
});

signInButton.addEventListener('click', function() {
    forms.classList.remove('active');
    wrapper.classList.remove('active');
});