
// funstion for time and date
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo1").innerHTML = d.toLocaleDateString();
}
var myVar = setInterval(myTimer, 1000);


// end of funsction on date and time



// better swiper starts here

// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// };

// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// };

// document.querySelectorAll('.image-slider img').forEach(images => {
//     images.onclick = () => {
//         var src = images.getAttribute('src');
//         document.querySelector('.main-home-image').src = src;
//     };
// });

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     loop: true,
//     grabCursor: true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1
//         },
//         768: {
//             slidesPerView: 2
//         }
//     },
// });

// better swipper ends here