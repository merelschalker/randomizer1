document.getElementById('randomLinkButton').addEventListener('click', function() {
    var urls = ['https://forms.office.com/Pages/ShareFormPage.aspx?id=-aZLWjH1Mk-UZzmPGead5BsZ3PLJiRJKubeXx0D-61FUQkZEOTJYM0UxQ05JSTFXS1BIRE9HM1I2QS4u&sharetoken=DpJRPJSQN26yElCTaBNZ', 'https://forms.office.com/Pages/ShareFormPage.aspx?id=-aZLWjH1Mk-UZzmPGead5BsZ3PLJiRJKubeXx0D-61FUMlo4T1lBSjRYOFdZOTdENDFaRFJWM0szQS4u&sharetoken=DpJRPJSQN26yElCTaBNZ'];
    var randomIndex = Math.floor(Math.random() * urls.length); // Randomly selects 0 or 1
    window.location.href = urls[randomIndex]; // Redirects user to randomly selected link
});
