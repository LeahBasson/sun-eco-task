let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}

function showSlides4 (n) {
  let i;
  let slides4 = document.getElementsByClassName("mySlides4");
  let dots = document.getElementsByClassName("demo4");
  let captionText = document.getElementById("caption4");
  if (n > slides4.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = slides4.length}
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active4", "");
  }
  slides4[slideIndex4-1].style.display = "block";
  dots[slideIndex4-1].className += " active4";
  captionText.innerHTML = dots[slideIndex4-1].alt;
}