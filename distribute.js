document.getElementById('randomLinkButton').addEventListener('click', function() {
    var urls = ['https://forms.office.com/e/TGhmgz0P95', 'https://forms.office.com/e/Gm8z2fDfm1'];
    var randomIndex = Math.floor(Math.random() * urls.length); // Randomly selects 0 or 1
    window.location.href = urls[randomIndex]; // Redirects user to randomly selected link
});
