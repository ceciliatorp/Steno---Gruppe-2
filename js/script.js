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


    
    document.addEventListener("DOMContentLoaded", function() {
        // Autoplay for video 1
        var video1 = document.getElementById("video1");
        if(video1) {
            video1.play(); // Start videoen automatisk
            video1.onended = function() {
                window.location.href = "spil-1.html"; // Skift til næste HTML-side, når videoen er færdig
            };
        }
    
        // Autoplay for video 2
        var video2 = document.getElementById("video2");
        if(video2) {
            video2.play(); // Start videoen automatisk
            video2.onended = function() {
                window.location.href = "straeling-i-hverdagen.html"; // Skift til næste HTML-side, når videoen er færdig
            };
        }
    
        // Autoplay for video 4
        var video4 = document.getElementById("video4");
        if(video4) {
            video4.play(); // Start videoen automatisk
            video4.onended = function() {
                window.location.href = "html-anna/stem.html"; // Skift til næste HTML-side, når videoen er færdig
            };
        }
    });



  


// Link til JSON + Data 
const krafvarkElm = document.getElementById("krafvark");

krafvark.addEventListener("click", function() {
    const energySourceElm = document.getElementById("energySource");
    energySourceElm.innerText = "FOSSIL BRANDSTOF";
});



