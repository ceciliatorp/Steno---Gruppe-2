'use strict';

// Stem

// Funktion til at tælle klik på billederne
function countClick(imageNumber) {
    // Hent det aktuelle antal klik fra localStorage
    var clicks = localStorage.getItem('image_' + imageNumber);
    // Hvis der ikke er nogen klik endnu, sæt antallet til 1, ellers inkrementer det
    clicks = clicks ? parseInt(clicks) + 1 : 1;
    // Gem antallet af klik i localStorage
    localStorage.setItem('image_' + imageNumber, clicks);
    // Opdater antallet af klik på skærmen
    // document.getElementById('clickCount' + imageNumber).innerText = 'Antal klik: ' + clicks;

    console.log('Antal klik på Billede ' + imageNumber + ': ' + clicks);
}

// Funktion til at navigere til næste side
function navigateToNextPage() {
    window.location.href = '../html-anna/cirkeldiagram.html'; // Skift 'cirkeldiagram.html' til navnet på din næste side
}


// Slider

var currentIndex = 0;
    var slides = document.querySelectorAll('.slide');

    // synlige billeder af gangen
    var visibleSlides = 3; 

    function moveSlider(direction) {
        if (direction === 'down') {
            currentIndex = (currentIndex + 1) % (slides.length - visibleSlides + 1);
        } else if (direction === 'up') {
            currentIndex = Math.max(0, currentIndex - 1);
        }
        var offset = currentIndex * -100 / visibleSlides + '%';
        document.getElementById('slider').style.top = offset;
    }


// autoplay på spil 1
  var video = document.getElementById("Video");
  video.onended = function() {
    window.location.href = "spil-1.html";
  };



  // autoplay på video 4
  var video = document.getElementById("Video4");
  video.onended = function() {
    window.location.href = "spil-1.html";
  };



  document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('Video2');

    video.addEventListener('ended', function () {
        // Når den nuværende video er færdig, afspil næste video
        window.location.href = 'video3.html'; // Ændr dette til navnet på den næste HTML-fil
    });
});
