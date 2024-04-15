document.getElementById('accessButton').addEventListener('click', function() {
    var urls = [
        'https://forms.office.com/Pages/ShareFormPage.aspx?id=-aZLWjH1Mk-UZzmPGead5BsZ3PLJiRJKubeXx0D-61FUQkZEOTJYM0UxQ05JSTFXS1BIRE9HM1I2QS4u&sharetoken=DpJRPJSQN26yElCTaBNZ',
        'https://forms.office.com/Pages/ShareFormPage.aspx?id=-aZLWjH1Mk-UZzmPGead5BsZ3PLJiRJKubeXx0D-61FUMlo4T1lBSjRYOFdZOTdENDFaRFJWM0szQS4u&sharetoken=DpJRPJSQN26yElCTaBNZ'
    ];
    var currentIndex = parseInt(localStorage.getItem('lastIndex')) || 0;  // Get the last index if it exists, or start with 0
    var nextIndex = (currentIndex + 1) % urls.length;  // Calculate the next index: 0 if the current is 1, 1 if the current is 0
    
    window.location.href = urls[nextIndex];  // Redirect to the next URL
    localStorage.setItem('lastIndex', nextIndex);  // Update the last index in local storage
});
