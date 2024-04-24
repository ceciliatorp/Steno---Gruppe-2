'use strict';

// Stem

// Funktion til at tælle klik på billederne
function countClick(imageNumber) {
    // Hent det aktuelle antal klik fra localStorage
    let clicks = localStorage.getItem('image_' + imageNumber);
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


    
    document.addEventListener("DOMContentLoaded", function() {
        // Autoplay for video 1
        let video1 = document.getElementById("video1");
        if(video1) {
            video1.play(); // Start videoen automatisk
            video1.onended = function() {
                window.location.href = "spil-1.html"; // Skift til næste HTML-side, når videoen er færdig
            };
        }
    
        // Autoplay for video 2
        let video2 = document.getElementById("video2");
        if(video2) {
            video2.play(); // Start videoen automatisk
            video2.onended = function() {
                window.location.href = "straeling-i-hverdagen.html"; // Skift til næste HTML-side, når videoen er færdig
            };
        }
    
        // Autoplay for video 4
        let video4 = document.getElementById("video4");
        if(video4) {
            video4.play(); // Start videoen automatisk
            video4.onended = function() {
                window.location.href = "vealg.html"; // Skift til næste HTML-side, når videoen er færdig
            };
        }
    });




