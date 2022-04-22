// Bring in Dom Elements

const slides = document.getElementsByClassName("carousel-item")
const buttonNext = document.getElementById('carousel-button-next')
const buttonPrev = document.getElementById('carousel-button-prev')

let slidePosition = 0
const totalSlides = slides.length

buttonNext.addEventListener('click', moveToNextSlide)
buttonPrev.addEventListener('click', moveToPrevSlide)

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}

function moveToNextSlide() {
    hideAllSlides()

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }

    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
    hideAllSlides()
    
    if (slidePosition  === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }

    slides[slidePosition].classList.add("carousel-item-visible")
}
