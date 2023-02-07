let shop = document.getElementById("myModal");

let shopItemsData = [
  {
    id: 0,
    name: "CPU1",
    price: 16388.9,
    desc:
      "Intel Core i7-12700K Alder Lake 3.6GHz Twelve-Core LGA 1700 Boxed Processor - Heatsink Not Included",
    imgSrc: "./assets/img/cpu1.jpg",
  },
  {
    id: 1,
    name: "CPU2",
    price: 18149.45,
    desc:
      "Intel Core i7-13700K Raptor Lake 3.4GHz Sixteen-Core LGA 1700 Boxed Processor - Heatsink Not Included",
    imgSrc: "./assets/img/cpu2.jpg",
  },
  {
    id: 2,
    name: "CPU3",
    price: 12099.45,
    desc:
      "AMD Ryzen 7 5800X Vermeer 3.8GHz 8-Core AM4 Boxed Processor - Heatsink Not Included",
    imgSrc: "./assets/img/cpu3.jpg",
  },
  {
    id: 3,
    name: "CPU4",
    price: 18863.9,
    desc:
      "AMD Ryzen 7 7700X Raphael AM5 4.5GHz 8-Core Boxed Processor - Heatsink Not Included",
    imgSrc: "./assets/img/cpu4.jpg",
  },
];

let generateShop =()=> {
  let itemHTML = shopItemsData.map((x)=>{
    return `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card" style="width: 14rem;">
        <img src="${x.imgSrc}" class="card-img-top" alt="cpu1">
        <div class="card-body">
          <h5 class="card-title">Intel Core i7-12700K</h5>
          <p class="card-text">Intel Core i7-12700K Alder Lake 3.6GHz Twelve-Core LGA 1700 Boxed Processor - Heatsink Not Included</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-center">₱16,388.9</li>
          <li class="list-group-item text-center">INTEL</li>
          <li class="list-group-item text-center">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </li>
        </ul>
        <div class="card-body text-center">
          <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Add</button>
        </div>
      </div>
    </div>
    `;
  })
  .join("");

  return (shop.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">

        <!-- The Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">CPU</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

        <!-- The Modal Body -->
        <div class="modal-body">
        <div class="container-fluid">

        <div class="row">
          ${itemHTML}
        </div>
          
        </div>
        </div>
              <!-- The Modal Footer -->
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                </div>

      </div>
    </div>
  `);
};
generateShop();





      

