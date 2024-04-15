document.getElementById('accessButton').addEventListener('click', function() {
    var urls = [
        'https://forms.office.com/e/TGhmgz0P95',
        'https://forms.office.com/e/Gm8z2fDfm1'
    ];
    var currentIndex = parseInt(localStorage.getItem('lastIndex')) || 0;  // Get the last index if it exists, or start with 0
    var nextIndex = (currentIndex + 1) % urls.length;  // Calculate the next index: 0 if the current is 1, 1 if the current is 0
    
    window.location.href = urls[nextIndex];  // Redirect to the next URL
    localStorage.setItem('lastIndex', nextIndex);  // Update the last index in local storage
});
