// Hent antallet af klik fra localStorage
var clicksImage1 = parseInt(localStorage.getItem('image_1')) || 0;
var clicksImage2 = parseInt(localStorage.getItem('image_2')) || 0;

// Beregn procentdelen af klik for hver
var totalClicks = clicksImage1 + clicksImage2;
var percentImage1 = (clicksImage1 / totalClicks) * 100;
var percentImage2 = (clicksImage2 / totalClicks) * 100;

// Tegn cirkeldiagrammet
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Billede 1', 'Billede 2'],
        datasets: [{
            label: 'Klikfordeling',
            backgroundColor: ['#ff6384', '#36a2eb'],
            data: [percentImage1, percentImage2]
        }]
    },
    options: {
        responsive: false
    }
});