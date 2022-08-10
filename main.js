window.onscroll = function() {scrollFunction()};
let xmark = document.querySelector('#fa-xmark');
let ham = document.querySelector('.fa-bars');
let checkbox = document.querySelector('#nav-checkbox');
let navbar = document.querySelector('.main-nav-container');
let logo = document.querySelector('.logo');

// popup window on load
window.addEventListener('load', function() {
  this.setTimeout(
    function open(event){
      document.querySelector('.popup').style.display = "block";
      document.querySelector('#overlay').style.display = "block";
      
    },
    1000
  )
});

// close popup window on exit click
document.querySelector("#close-btn").addEventListener('click', function() {
  document.querySelector(".popup").style.display = "none";
  document.querySelector('#overlay').style.display = "none";
})


// nav background color on scroll
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    navbar.classList.add('bgcolor');

  } else {
    navbar.classList.remove('bgcolor');

  }
}

// add background color on click for nav
function check() {
  if(document.getElementById("nav-checkbox").checked && !navbar.classList.contains("bgcolor")) {
    navbar.classList.add('bgcolor');
    console.log('you good fam')
  } else {
    console.log('not no mo')
  }

}

checkbox.addEventListener('click', check)