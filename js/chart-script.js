// Hent antallet af klik fra localStorage
let clicksImage1 = parseInt(localStorage.getItem('image_1')) || 0;
let clicksImage2 = parseInt(localStorage.getItem('image_2')) || 0;

// Beregn procentdelen af klik for hver
let totalClicks = clicksImage1 + clicksImage2;
let percentImage1 = (clicksImage1 / totalClicks) * 100;
let percentImage2 = (clicksImage2 / totalClicks) * 100;

// Tegn cirkeldiagrammet
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['JA TAK', 'NEJ TAK'],
        datasets: [{
            backgroundColor: ['#D0FE1A', '#E474EE'],
            data: [percentImage1, percentImage2]
        }]
    },
    options: {
        responsive: false
    }
});

