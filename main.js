window.onscroll = function() {scrollFunction()};
let xmark = document.querySelector('#fa-xmark');
let ham = document.querySelector('.fa-bars');
let checkbox = document.querySelector('#nav-checkbox');
let navbar = document.querySelector('.main-nav-container');
let logo = document.querySelector('.logo');
let popupBtn = document.getElementById('popup-btn');
let btn = document.getElementById('submit-btn')


btn.addEventListener("click", function() {
  // e.preventDefault();
  btn.setAttribute('class', 'submit process');
  btn.innerHTML = 'Processing';
  setTimeout(()=>{
     btn.setAttribute('class', 'submit submitted');
     btn.innerHTML = `
     <span class="tick">&#10004;</span>
     Submitted
     `;
  },3000);
});

function calc1() {
  let qty7g = parseInt(document.getElementById('box1').value) || 0;
  let qty14g = parseInt(document.getElementById('box2').value) || 0;
  let qty28g = parseInt(document.getElementById('box3').value) || 0;
  let price1 = document.getElementById('price1');
  let price2 = document.getElementById('price2');
  let price3 = document.getElementById('price3');

  let total7g = qty7g*160
  let total14g = qty14g*256;
  let total28g = qty28g*520;
  let grandTotal = total7g + total14g + total28g;

  price1.innerHTML = total7g;
  price2.innerHTML = total14g;
  price3.innerHTML = total28g;

  document.getElementById('fcf-total').innerHTML = grandTotal;
  return grandTotal
}

function calc2() {
  let qty7g2 = parseInt(document.getElementById('box4').value) || 0;
  let qty14g2 = parseInt(document.getElementById('box5').value) || 0;
  let qty28g2 = parseInt(document.getElementById('box6').value) || 0;
  let price4 = document.getElementById('price4');
  let price5 = document.getElementById('price5');
  let price6 = document.getElementById('price6');

  let total7g2 = qty7g2*160
  let total14g2 = qty14g2*256;
  let total28g2 = qty28g2*520;
  let grandTotal2 = total7g2 + total14g2 + total28g2;

  price4.innerHTML = total7g2;
  price5.innerHTML = total14g2;
  price6.innerHTML = total28g2;

  document.getElementById('trop-total').innerHTML = grandTotal2;
  return grandTotal2;
}

function calc3() {
  let qty7g3 = parseInt(document.getElementById('box7').value) || 0;
  let qty14g3 = parseInt(document.getElementById('box8').value) || 0;
  let qty28g3 = parseInt(document.getElementById('box9').value) || 0;
  let price7 = document.getElementById('price7');
  let price8 = document.getElementById('price8');
  let price9 = document.getElementById('price9');

  let total7g3 = qty7g3*160
  let total14g3 = qty14g3*256;
  let total28g3 = qty28g3*520;
  let grandTotal3 = total7g3 + total14g3 + total28g3;

  price7.innerHTML = total7g3;
  price8.innerHTML = total14g3;
  price9.innerHTML = total28g3;

  document.getElementById('pup-total').innerHTML = grandTotal3;
  return grandTotal3;
}

function calc4() {
  let qty7g4 = parseInt(document.getElementById('box10').value) || 0;
  let qty14g4 = parseInt(document.getElementById('box11').value) || 0;
  let qty28g4 = parseInt(document.getElementById('box12').value) || 0;
  let price10 = document.getElementById('price10');
  let price11 = document.getElementById('price11');
  let price12 = document.getElementById('price12');

  let total7g4 = qty7g4*160
  let total14g4 = qty14g4*256;
  let total28g4 = qty28g4*520;
  let grandTotal4 = total7g4 + total14g4 + total28g4;

  price10.innerHTML = total7g4;
  price11.innerHTML = total14g4;
  price12.innerHTML = total28g4;

  document.getElementById('gmo-total').innerHTML = grandTotal4;
  return grandTotal4;
}

function calc5() {
  let qty7g5 = parseInt(document.getElementById('box13').value) || 0;
  let qty14g5 = parseInt(document.getElementById('box14').value) || 0;
  let qty28g5 = parseInt(document.getElementById('box15').value) || 0;
  let price13 = document.getElementById('price13');
  let price14 = document.getElementById('price14');
  let price15 = document.getElementById('price15');

  let total7g5 = qty7g5*160
  let total14g5 = qty14g5*256;
  let total28g5 = qty28g5*520;
  let grandTotal5 = total7g5 + total14g5 + total28g5;

  price13.innerHTML = total7g5;
  price14.innerHTML = total14g5;
  price15.innerHTML = total28g5;

  document.getElementById('pap-total').innerHTML = grandTotal5;
  return grandTotal5;
}


function formTotal() {
  let finalTotal = document.getElementById('form-total')
  totalForm = calc1() + calc2() + calc3() + calc4() + calc5();
  finalTotal.innerHTML = totalForm
  if(totalForm < 5000) {
    finalTotal.style.color = 'red';
  } else {
    finalTotal.style.color = 'green'
    btn.disabled = false;
  }
}

// popup window on load
window.addEventListener('load', function() {
  this.setTimeout(
    function open(event){
      window.scrollTo(0,0)
      // document.body.style.overflow = "hidden";
      document.querySelector('.popup').style.display = "block";
      document.querySelector('#overlay').style.display = "block";
    },
    3500
  )
});

// close popup window on exit click
document.querySelector("#close-btn").addEventListener('click', function() {
  document.body.style.overflow = "auto";
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

popupBtn.addEventListener('click', ()=> {
  document.body.style.overflow = 'auto';
})
