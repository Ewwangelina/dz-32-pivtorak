
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(nextIndex) {
    showSlides(slideIndex += nextIndex);
}

function currentSlide(nextIndex) {
    showSlides(slideIndex = nextIndex);
}

function showSlides(nextIndex) {
    const slides = document.getElementsByClassName("slider_item");
    const dots = document.getElementsByClassName("dot");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const firstIndex = 0;
    const lastIndex = slides.length-1;

    if (nextIndex > lastIndex) {
        slideIndex = firstIndex
    }
    if (nextIndex < firstIndex) {
        slideIndex = lastIndex
    }
    if (slideIndex === firstIndex) {
        prev.style.display = 'none'
    }else {
        prev.style.display = 'block'
    }
    if (slideIndex === lastIndex){
        next.style.display = 'none'
    }else {
        next.style.display = 'block'
    }
    for (let i = 0; i < slides.length; i++) {
        if (i === slideIndex){
            slides[i].style.display = "block";
            dots[i].className = dots[i].className += (" active");
        }else {
            slides[i].style.display = "none";
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }


}
// element.classList.add("mystyle");
// element.classList.remove("mystyle");

    