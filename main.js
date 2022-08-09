window.onscroll = function() {scrollFunction()};

let xmark = document.querySelector('#fa-xmark');
let ham = document.querySelector('.fa-bars');
let checkbox = document.querySelector('#nav-checkbox');
let navbar = document.querySelector('.main-nav-container');
let logo = document.querySelector('.logo');

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.classList.add('bgcolor');

  } else {
    navbar.classList.remove('bgcolor');

  }
}

function check() {
  if(document.getElementById("nav-checkbox").checked && !navbar.classList.contains("bgcolor")) {
    navbar.classList.add('bgcolor');
    console.log('you good fam')
  } else {
    console.log('not no mo')
  }

}

checkbox.addEventListener('click', check)