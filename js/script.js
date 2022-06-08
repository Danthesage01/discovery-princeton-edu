// Variables

let slidePosition = 0;
const carouselBtnNext = document.getElementById("carousel-button-next"),
      carouselBtnPrev = document.getElementById("carousel-button-prev"),
      slides = document.getElementsByClassName("carousel-item"),
      totalSlides = slides.length,
      searchBox = document.querySelector("#box")

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

function displaySearchInput(e) {
    if (e.target === document.querySelector("div > .fa")) {
        searchBox.classList.add("box")
        searchBox.children[0].classList.add("fa-search-css")
        searchBox.innerHTML += ` <input type="text" name="search" id="search" class="search" placeholder="Search...">`

        e.target.value = ""
    }
    else if(!document.querySelector("#box").contains(e.target)){
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


// Hamburger Icon
const hamburger = document.getElementById("menu-icon")

function openMenu(e){

    console.log("clicked")
}

hamburger.addEventListener("click", openMenu)