const popup = document.getElementById('mypopup'),
    popupToggle = document.querySelector('.header-btn'),
    popupClose = document.querySelector('.close')

    const togglePopup = () => {
        if(popup.classList.contains('active')) {
            popup.classList.remove('active')
        } else {
            popup.classList.add('active')
        }
    }

    popupToggle.addEventListener('click', togglePopup)
    popupClose.addEventListener('click', togglePopup)
    window.addEventListener('click', (e) => {
        if(e.target === popup) {
            togglePopup()
        }
    })

    /* slider */

$('.slider-wrapper').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true
})
