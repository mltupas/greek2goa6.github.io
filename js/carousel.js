var num_user_events = localStorage.getItem("num_events") || 0;
var carousel_events = JSON.parse(localStorage.getItem("carousel_events")) || [];
var current_events = $('.slideshow-container'), container;

//SORT CAROUSEL EVENTS
var sort_events = carousel_events.sort(function(a, b) {return b - a});
var sorted_events = sort_events.sort(comparator);

//ORDER ARRAY BY DATE, WITH OLDEST SHOWING FIRST
function comparator(a, b) {
  if (a.date > b.date) return 1;
  if (a.date < b.date) return -1;
  return 0;
}

console.log(sorted_events);

//APPEND SLIDES TO CAROUSEL CONTAINER
for (var index = 0; index < num_user_events; index++) {

    container = $('<div id="mySlides" class="carousel_container"></div>');
    current_events.append(container);

    container.append('<div class="numbertext">' + (index + 1) + ' / ' + num_user_events + '</div>');
    container.append('<img src="https://roosevelt.ucsd.edu/res-life/ercstudentsatmlk2016crop720x370.jpg" style=width"100%">');
    container.append('<div class="text">');
    container.append('<h1>' + sorted_events[index].title + '</h1');
    container.append('<h3>' + sorted_events[index].location + '</h3>');
    container.append('<h3>' + sorted_events[index].date + " from " + carousel_events[index].time + '</h3>');
    container.append('<h3>' + sorted_events[index].description + '</h3>');
    container.append('</div>');
  }

//TO ADD DOTS TO CAROUSEL AS EVENTS ARE ADDED - INCOMPLETE
//   var dots = $('#dots'), container2;
//
//    for (var index = 1; index <= num_user_events; index++) {
//        container2 = $('<span class="dot" onclick="currentSlide(' + index + ')></span>');
//
//        dots.append(container2);
//    }

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
  var slides = document.getElementsByClassName("carousel_container");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}
