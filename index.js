document.addEventListener('scroll', function() {
    if (window.pageYOffset > 230) {
        document.getElementById('navbar').classList.add('change-color');
    } else {
        document.getElementById('navbar').classList.remove('change-color');
    }
});