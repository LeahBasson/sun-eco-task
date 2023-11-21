
let slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}

function showSlides6 (n) {
  let i;
  let slides6 = document.getElementsByClassName("mySlides6");
  let dots = document.getElementsByClassName("demo6");
  let captionText = document.getElementById("caption6");
  if (n > slides6.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = slides6.length}
  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active6", "");
  }
  slides6[slideIndex6-1].style.display = "block";
  dots[slideIndex6-1].className += " active6";
  captionText.innerHTML = dots[slideIndex6-1].alt;
}