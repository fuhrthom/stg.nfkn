var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var vid = document.getElementById("video");
var btn = document.getElementById("play-button");
var backgroundImage = document.createElement("img");
backgroundImage.src = "/Bilder/play.svg";
backgroundImage.style.width = "100%";
backgroundImage.style.height = "100%";
backgroundImage.style.borderRadius = "10px";
btn.appendChild(backgroundImage);
function play() {
    if (vid.paused) {
        vid.play();
        backgroundImage.src = "/Bilder/pause.svg";
    } else {
        vid.pause();
        backgroundImage.src = "/Bilder/play.svg";
    }
}