var acc = document.getElementsByClassName("accordion");
var icon = document.getElementsByClassName("accordionNull");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.firstElementChild.firstElementChild.classList.toggle("accordionNullA");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var backgrounds = document.querySelectorAll(".headerCarousel");
  var headers = document.querySelectorAll(".headerCarousel h1");
  var headersSpan = document.querySelectorAll(".headerCarousel h1 span");
  var paragraphs = document.querySelectorAll(".headerCarousel p");
  var links = document.querySelectorAll(".headerCarousel a");
  for (i = 0; i < backgrounds.length; i++) {
    backgrounds[i].style.display = "none";
    headers[i].style.display = "none";
    headersSpan[i].style.display = "none";
    paragraphs[i].style.display = "none";
    links[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > backgrounds.length) {slideIndex = 1}

  backgrounds[slideIndex-1].style.display = "block";
  headers[slideIndex-1].style.display = "block";
  headersSpan[slideIndex-1].style.display = "block";
  paragraphs[slideIndex-1].style.display = "block";
  links[slideIndex-1].style.display = "inline-block";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}



var TeamSlideIndex = 1;
showTeamSlides(TeamSlideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showTeamSlides(TeamSlideIndex = n);
}

function showTeamSlides(n) {
  var i;
  var clientImage = document.querySelectorAll(".clientImage img");
  var clientName = document.querySelectorAll(".clientName h3");
  var clientTitle = document.querySelectorAll(".clientTitle h6");
  var clientMessage = document.querySelectorAll(".clientMessage p");
  var dots = document.getElementsByClassName("dot");
  if (n > clientImage.length) {TeamSlideIndex = 1}
  if (n < 1) {TeamSlideIndex = clientImage.length}
  for (i = 0; i < clientImage.length; i++) {
    clientImage[i].style.display = "none";
    clientName[i].style.display = "none";
    clientTitle[i].style.display = "none";
    clientMessage[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dotsActive", "");
  }
  clientImage[TeamSlideIndex-1].style.display = "block";
  clientName[TeamSlideIndex-1].style.display = "block";
  clientTitle[TeamSlideIndex-1].style.display = "block";
  clientMessage[TeamSlideIndex-1].style.display = "block";
  dots[TeamSlideIndex-1].className += " dotsActive";
}

var navbar = document.querySelector("#toggler");
function toggleNavigation(x) {
  x.classList.toggle("change");
  if(navbar.style.display ==="block"){
    navbar.style.display = "none"
  }else{
     navbar.style.display = "block";
  }
}

var banner = document.querySelectorAll(".bannerClick");
var chat = document.querySelector(".chat");
var li;
for (li = 0; li < banner.length; li++) {
  banner[li].addEventListener("click", function() {
    if(chat.style.display==="block"){
      chat.style.display="none";
    }else{
      chat.style.display="block";
    }
  });
}
