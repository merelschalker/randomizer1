document.getElementById('accessButton').addEventListener('click', function() {
    var urls = ['Link1', 'Link2', " 'Link3']; #include your links here, just put in a thirs link, divided by a comma. T
    var randomIndex = Math.floor(Math.random() * urls.length); // Randomly selects 0 or 1
    window.location.href = urls[randomIndex]; // Redirects user to randomly selected link
});
