
'use strict';

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

// Skift energikilde
const energySourceElm = document.getElementById("energySource");
const prisElm = document.getElementById("pris");
const prisEnhedElm = document.getElementById("prisenhed");
const energiBilledeElm = document.querySelector(".sticker-energikilde");
const kortElm = document.querySelector("#kort");

// Vindmølle
const vindmellerElm = document.getElementById("vindmeller");

vindmellerElm.addEventListener("click", function() {
    energySourceElm.innerText = "VINDMØLLER";
    prisElm.innerText = "800";
    prisEnhedElm.innerText = "Tusinde";
    energiBilledeElm.setAttribute("src", "img/vindmoeller.png");
    kortElm.setAttribute("src", "img/kort/vindmøllekort.png");
});

// Kraftværk
const krafvarkElm = document.getElementById("krafvark");

krafvarkElm.addEventListener("click", function() {
    energySourceElm.innerText = "FOSSIL BRANDSTOF";
    prisElm.innerText = "200";
    prisEnhedElm.innerText = "Tusinde";
    energiBilledeElm.setAttribute("src", "img/kraftveark.png");
    kortElm.setAttribute("src", "img/kort/kraftvearkkort.png");
});



// krafvarkElm.addEventListener('click', () => {

//     // Stien til din JSON-fil
//     const url = '../json/data.json'; 

//     fetch(url)
//         .then(res => res.json())
//         .then(energiData => {
//             energiData.forEach(function (val) {

//                console.log('val');

//             });
//         })
//         .catch(error => {
//             console.error('Error fetching JSON:', error);
//         });
// });
