let slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5 (n) {
  let i;
  let slides5 = document.getElementsByClassName("mySlides5");
  let dots = document.getElementsByClassName("demo5");
  let captionText = document.getElementById("caption5");
  if (n > slides5.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active5", "");
  }
  slides5[slideIndex5-1].style.display = "block";
  dots[slideIndex5-1].className += " active5";
  captionText.innerHTML = dots[slideIndex5-1].alt;
}