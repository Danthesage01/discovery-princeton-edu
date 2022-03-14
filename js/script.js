// Variables
const dotsNav = document.querySelector(".carousel-nav")
const dots = Array.from(dotsNav.children)
const track = document.querySelector(".carousel-track")
const slides = Array.from(track.children)
const searchBox = document.querySelector("#box")
const totalSlides = slides.length
let slidePosition = 0


// Functions
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
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible");

}
dotsNav.addEventListener("click", e=>{
    const targetDot = e.target.closest("button")
    if(!targetDot) return
    
    const currentSlide = track.querySelector(".current-slide")
    const currentDot = dotsNav.querySelector(".current-slide")
    const targetIndex = dots.findIndex(dot => dot === targetDot)

if (moveToNextSlide()) {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    } 
   
}
   
    currentDot.classList.remove("current-slide")
    targetDot.classList.add("current-slide")
    })

function displaySearchInput(e) {
    if (e.target === document.querySelector(".fa")) {
        searchBox.classList.add("box")
        searchBox.children[0].classList.add("fa-search-css")
        searchBox.innerHTML += ` <input type="text" name="s" class="search" placeholder="Search...">`
    }
    else {
        searchBox.classList.remove("box")
        searchBox.children[0].classList.remove("fa-search-css")
        searchBox.innerHTML = `<i class="fa fa-search fa-flip-horizontal"></i>`
    }
    e.preventDefault()
}

// Event Listener
document.getElementById("carousel-btn-next").addEventListener("click", moveToNextSlide)
document.getElementById("carousel-btn-prev").addEventListener("click", moveToPrevSlide)
document.querySelector("body").addEventListener("click", displaySearchInput)
document.querySelector(".carousel").addEventListener("mouseleave", (e)=>{
    const itemBtnC =document.querySelector(".carousel-btn")
    itemBtnC.style.display = "none"
   
})

document.querySelector(".carousel").addEventListener("mouseover", (e)=>{
    const itemBtnC =document.querySelector(".carousel-btn")
    itemBtnC.style.display = "block"  
})
