
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



// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
  
//     // // If we need pagination
//     // pagination: {
//     //   el: '.swiper-pagination',
//     // },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // // And if we need scrollbar
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   });