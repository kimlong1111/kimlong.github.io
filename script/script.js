
// hidden menu bar

var stopall=document.getElementById('body');
var menuBar=document.getElementById('menu-hide');
var btnBack=document.getElementById('btn-back');
var menu=document.getElementById('menu-bar');
  menu.addEventListener('click',function(){
  menuBar.style.transition='all 1s';
  menuBar.style.transform='translate(0,0)';
  stopall.style.position='fixed';
  
});

  btnBack.addEventListener('click',function(){
  menuBar.style.transition='all 1s';
  menuBar.style.transform='';
  stopall.style.position='';
  
});

// photo slide




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


