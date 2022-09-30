let home = document.getElementById('home');

let signup = document.getElementById('signup');

let login = document.getElementById('login');

let loginbtn = document.getElementById('loginbtn');

let signupbtn = document.getElementById('signupbtn');

let backbtnlog = document.getElementById('backbtnlog');

let backbtns = document.getElementById('backbtns');


function signupPage() {
    home.style.display = 'none';
    login.style.display = 'none'
    signup.style.display='block';
    console.log('hello')
}

function loginPage() {
  home.style.display = 'none';
  signup.style.display = 'none';
  login.style.display ='block'
}

function homePage() {
  home.style.display = 'block';
  signup.style.display = 'none';
  login.style.display = 'none'
}

signupbtn.addEventListener('click', signupPage);

loginbtn.addEventListener ('click', loginPage);
backbtnlog.addEventListener('click', homePage);
backbtns.addEventListener('click', homePage);
