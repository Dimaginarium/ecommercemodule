const cartIcon = document.querySelector(".cart-icon");
const menuIcon = document.querySelector(".icon-menu");
const closeIcon = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const incrementNumber = document.querySelector(".input-number-increment");
const decrementNumber = document.querySelector(".input-number-decrement");
const itemCounter = document.querySelector(".item-counter");
const cartButton = document.querySelector("#btn-cart");
const cartCounter = document.querySelector(".cart-counter");
const trash = document.querySelector("#trash");
const cartEmpty = document.querySelector(".cart-empty");

const nextSlide = document.querySelector(".carousel-btn-next");
const prevSlide = document.querySelector(".carousel-btn-prev");
const slider = document.querySelector(".slides");
const firstSlide = document.querySelector(".first");
const imgSelectors = document.querySelectorAll('input[type=radio]');
const labels = document.querySelectorAll('label');

cartIcon.addEventListener("click", function () {
    document.querySelector(".cart-modal").classList.toggle("hidden");
})

menuIcon.addEventListener("click", function () {
    mobileMenu.style.left = "0px"
})


closeIcon.addEventListener("click", function () {
    mobileMenu.style.left = "-500px"
})

incrementNumber.addEventListener("click", function () {
    document.getElementById("input-number").stepUp(1);
})
decrementNumber.addEventListener("click", function () {
    document.getElementById("input-number").stepUp(-1);
})

cartButton.addEventListener("click", function () {
    let value = document.getElementById("input-number").value;
    itemCounter.innerHTML = value;
    cartCounter.innerHTML = value + '<br><b> Total: $' + 125 * (value) + '</b>';
    cartEmpty.classList.add("hidden");
    document.querySelector(".cart-full").style.display = 'grid';

});
trash.addEventListener("click", function () {
    document.getElementById("input-number").value = 0;
    itemCounter.innerHTML = 0;
    cartEmpty.classList.remove("hidden");
    document.querySelector(".cart-full").style.display = 'none';
});


let index = 0;

nextSlide.addEventListener("click", function () {
    index = (index < 3) ? index + 1 : 3;
    slider.style.transform = 'translate(' + (index) * -100 + '%)';
})

prevSlide.addEventListener("click", function () {
    index = (index > 0) ? index - 1 : 0;
    slider.style.transform = 'translate(' + (index) * -100 + '%)';
})

for (let i = 0; i < imgSelectors.length; i++) {
    imgSelectors[i].addEventListener("click", function () {
        for (i = 0; i < imgSelectors.length; i++) {
            if (imgSelectors[i].checked) {
                labels[i].style.opacity = '0.5';
            } else {
                labels[i].style.opacity = '1';
            }
        }
    })
}