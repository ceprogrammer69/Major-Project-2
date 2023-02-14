let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");


let basket = JSON.parse(localStorage.getItem("data")) || []; 

// Calculation of cart quantity inside the Cart Icon

let calculation =()=>{
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x)=> x.item ).reduce((x,y)=>x+y,0) // Changing cartIcon Number
  //console.log(basket.map((x)=> x.item ).reduce((x,y)=>x+y,0));
};
calculation(); // everytime the application loads, calculation() runs

let generateCartItems = () => {
  if(basket.length !==0){
    return  shoppingCart.innerHTML = basket.map((x)=>{
      let {id, item} = x;
      let search = productsALL.find((y)=> y.id === id) || [];
      return `
      
      <div class="card border-dark rounded mb-3" style="width: 18rem;">
      <img style="width:150px;" src=${search.imgSrc} class="card-img-top mx-auto d-block" alt=${search.imgSrc}>
      <div class="card-body">
        <h5 class="card-title">${search.name}</h5>
        <p class="card-text">${search.desc}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item fw-bold">Unit Price: ₱${search.price.toLocaleString()}</li>
        <li class="list-group-item">Quantity: <i onclick="increment(${id})" class="bi bi-plus-square"></i><span id="${id}">
          ${item}
        </span><i onclick="decrement(${id})" class="bi bi-dash-square"></i></li>
        <li class="list-group-item">Total: ₱${(parseFloat(item) * parseFloat(search.price)).toLocaleString()}</li>
      </ul>
      <div class="card-body">
        <a onclick="removeItem(${id})" class="btn btn-danger mx-3">Remove</a>
      </div>
    </div>
    

      `;
    } ).join("");
  }
  else{
    shoppingCart.innerHTML = `
    <p class="text m-0">No Items in your cart</p>
    `;
    label.innerHTML = ` 
    <p class="text m-0">Cart(<span>0</span> items): <span>₱ 0.00</span></p>
        <button class="btn btn-outline-dark disabled">Checkout</button>
    `;

  }
};

generateCartItems();

// Increment Decrement and Update Functions
//increment Function
let increment = (id) => {
  let search = basket.find((x)=> x.id === id ) // check if there is item in the basket similar to selected item

  if(search === undefined){
    basket.push({
      id : id,
      item: 1,
    });
  }
  else{
    search.item += 1;
  }

  generateCartItems();
  update(id);
  localStorage.setItem("data", JSON.stringify(basket));  //Setting Data into Local Storage. data = key
};

//decrement function
let decrement = (id) => {
  let search = basket.find((x)=> x.id === id )

  if (search === undefined) return; // when the search is undefined, do nothing
  else if(search.item === 0) return;
  else{
    search.item -= 1;
  }

  update(id);

  basket = basket.filter((x)=> x.item !== 0);   //filtering item in the local storage that have 0 items, basket is the array in the local storage. filter x is targeting items in the array in the local storage. it removes item with 0
  generateCartItems();
  
  localStorage.setItem("data", JSON.stringify(basket));
};

//Updating InnerHTML
let update = (id) => {
  let search = basket.find((x)=>x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

//Remove Items

let removeItem = (id) => {
  let selectedItem = id;
  //console.log(selectedItem);
  basket = basket.filter((x)=>x.id !== selectedItem);
  generateCartItems();
  TotalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let TotalAmount = () => {
  if(basket.length !== 0){
    let amount = basket.map((x) =>{
      let {item, id} = x;
      let search = productsALL.find((y)=> y.id === id) || [];
      return item * search.price;
    }).reduce((x,y)=>x+y,0);
    // console.log(amount);
    label.innerHTML = `
       <h2><p class="text m-0">Total Price: <span>₱${amount.toLocaleString()}</span></p></h2>
       <button class="btn btn-outline-dark">Checkout</button>
    `;
  }
  else return ;
};
TotalAmount();

