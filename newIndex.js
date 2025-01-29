window.onload = function() {
    document.querySelector('.shape').classList.add('move');
    document.querySelector('.shape2').classList.add('move');
    document.querySelector('.logo-container').classList.add('show');
}

window.addEventListener('scroll', function() {
    const newFrame = document.querySelector('.new-frame');
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        newFrame.style.display = 'flex';
    }
});