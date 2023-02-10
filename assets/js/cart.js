let basket = JSON.parse(localStorage.getItem("data")) || []; 

// Calculation of cart quantity inside the Cart Icon

let calculation =()=>{
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x)=> x.item ).reduce((x,y)=>x+y,0) // Changing cartIcon Number
  //console.log(basket.map((x)=> x.item ).reduce((x,y)=>x+y,0));
};
calculation(); // everytime the application loads, calculation() runs