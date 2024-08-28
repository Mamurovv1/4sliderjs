let wrapper = document.querySelector(".wrapper");
let carousel = document.querySelector(".carousel");
let images = document.querySelectorAll("img");
let buttons = document.querySelectorAll(".button");

let imageIndex = 0;
let intervalId = "";

const slideImage = () => {
    imageIndex = imageIndex === images
    carousel.style.transform = `translateX(${-imageIndex * 100}%)`;
};

const updateClick = (e) => {
    clearInterval(intervalId);
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage();
};

buttons.forEach(button => button.addEventListener("click", updateClick));