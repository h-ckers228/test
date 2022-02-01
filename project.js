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

    let slideIndex = 1;
setSlides(slideIndex);

next.addEventListener('click', () => showSlides(slideIndex += 1))
prev.addEventListener('click', () => showSlides(slideIndex += -1))

var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot")

function setSlides(n) {

    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1) {
        slideIndex = slides.length
    }
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display='none'
    }
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active","");
    }

    slides[slideIndex-1].style.display='block';
    dots[slideIndex-1].className += "active";
}

console.log;