//  In it Owl Carousel -->
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:5
        }
    }
})  

// var owl = $("#owl-carousel-1").owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:3
//         }
//     }
// })


let basket = JSON.parse(localStorage.getItem("data")) || []; 

// Calculation of cart quantity inside the Cart Icon

let calculation =()=>{
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x)=> x.item ).reduce((x,y)=>x+y,0) // Changing cartIcon Number
  //console.log(basket.map((x)=> x.item ).reduce((x,y)=>x+y,0));
};
calculation(); // everytime the application loads, calculation() runs
  