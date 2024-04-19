document.getElementById('accessButton').addEventListener('click', function() {
    var urls = [
        'https://forms.office.com/e/zTdaakVe9r',
        'https://forms.office.com/e/RRHr17PCgT',
        'https://forms.office.com/e/r3r1eEfJnD',
        'https://forms.office.com/e/yYPv7WTfHx'
    ]; // Array containing the URLs
    var randomIndex = Math.floor(Math.random() * urls.length); // Randomly selects an index based on the array's length
    window.location.href = urls[randomIndex]; // Redirects user to the randomly selected link
});


