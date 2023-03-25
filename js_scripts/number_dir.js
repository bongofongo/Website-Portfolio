document.addEventListener('keydown', function(event) {
    if (event.key === '0') {
        window.scrollTo({
            top: 0,
            behavior: "smooth"});
    } else if (event.key === '1') {
        window.scrollTo({
            top: 2250,
            behavior: "smooth"});
    } else if (event.key === '2') {
        window.scrollTo({
            top: 1500,
            behavior: "smooth"});
    }
    if (event.key === '9') {
        var headbar = document.querySelector('.head-total');
        if (headbar.style.opacity === '1') {
            headbar.style.opacity = '0';
        } else {
            headbar.style.opacity = '1';
        }
    }
});