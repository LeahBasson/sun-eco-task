let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3 (n) {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots = document.getElementsByClassName("demo3");
  let captionText = document.getElementById("caption3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active3", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active3";
  captionText.innerHTML = dots[slideIndex3-1].alt;
}