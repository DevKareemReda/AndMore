const productsData = [
  {
    id: 1,
    name: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 28,
    discount: 35,
    image: "images/product_01.png",
    recommended: true,
    actionType: "buy",
    quantity: 0
  },
  {
    id: 2,
    name: "سماعات الرأس مثالية للسفر والعمل والمنزل والصالة الرياضية",
    price: 21,
    image: "images/product_02.png",
    recommended: false,
    actionType: "view",
    quantity: 0
  },
  {
    id: 3,
    name: "مجموعة عناية بالبشرة من استي لود الجميلة",
    price: 23,
    discount: 28,
    image: "images/product_03.png",
    recommended: true,
    actionType: "buy",
    quantity: 0
  },
  {
    id: 4,
    name: "مجموعه سيروم تكثيف الرموش فوريفر",
    price: 31,
    image: "images/product_04.png",
    recommended: false,
    actionType: "view",
    quantity: 0
  },
  {
    id: 5,
    name: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 10,
    discount: 15,
    image: "images/product_05.png",
    recommended: true,
    actionType: "buy",
    quantity: 0
  },
  {
    id: 6,
    name: "سماعات الرأس مثالية للسفر والعمل والمنزل والصالة الرياضية",
    price: 128,
    image: "images/product_06.png",
    recommended: false,
    actionType: "view",
    quantity: 0
  }
];

const addProduct = document.querySelector(".add-product");

productsData.forEach(product => {
  let html = "";
  html = `
  <div class="col-md-3 mb-4">
    <div class="product-items">
      <div class="text-center">
        <img src="${product.image}" alt="product_${product.id}" />
        ${product.recommended ? `<span class="recommanded">موصي بها</span>` : ""}
      </div>
      <div class="product-desc">
        <a href="details.html">${product.name.split(" ", 3).join(" ")}</a>
        <div class="d-flex justify-content-between align-items-center mt-3">
          <p class="price">${product.price.toFixed(2)} KWD</p>
                    ${product.discount ? `<p class="discount">KWD ${product.discount}</p>` : ""}


        </div>
        <div class="d-flex justify-content-between align-items-center mt-3 buy">

          ${product.actionType === "buy" ? `<button class="btn btn-primary" ,
            quantity: onclick=addCart(${product.id})>اشترى الآن</button>` : `<button class="btn btn-primary">عرض</button>` }

          <i class="fa-regular fa-heart"></i>
        </div>
      </div>
      </div>
    </div>
  `;
  addProduct.innerHTML += html;
});




const cartProduct = document.querySelector(".cart-product");

const addCart = (id) => {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  const showId = productsData.find(items => items.id === id);

  // شوف لو المنتج موجود في التخزين
  let loopProduct = productStorage.find((el) => el.id === showId.id);
  let html = ""
  if (loopProduct) {
    loopProduct.quantity += 1;
  } else {
    showId.quantity = 1;
    productStorage.push(showId);
  }
  productStorage.map(items=> {
  html += `
    <div class="cart-items d-flex py-3">
      <a href="#">
        <img src="${items.image}" alt="Not Found" class="ms-4" />
      </a>
      <div class="cart-title d-flex justify-content-between align-items-center">
        <div class="cart-price pr-6">
          <a href="#" class="mb-2">${items.name.split(" ", 3).join(" ")}</a>
          <p>${items.price.toFixed(2) *  items.price} KWD &times; <span>${items.quantity}</span></p>
        </div>
        <div class="plus-dash mt-3">
          <span class="decrement">-</span>
          <input type="number" class="remove-caret" value="${items.quantity}" />
          <span class="increment">+</span>
        </div>
      </div>
    </div>
  `;
})
  calcTotalPrice(productStorage);
  calcTotalQuantity(productStorage);
  cartProduct.innerHTML = html;
  localStorage.setItem("saved", JSON.stringify(productStorage));
};

const showProduct = () => {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let html = ""
  productStorage.map(items=> {
  html += `
    <div class="cart-items d-flex py-3">
      <a href="#">
        <img src="${items.image}" alt="Not Found" class="ms-4" />
      </a>
      <div class="cart-title d-flex justify-content-between align-items-center">
        <div class="cart-price pr-6">
          <a href="#" class="mb-2">${items.name.split(" ", 3).join(" ")}</a>
          <p>${items.price.toFixed(2) * items.price} KWD &times; <span>${items.quantity}</span></p>
        </div>
        <div class="plus-dash mt-3">
          <span class="decrement">-</span>
          <input type="number" class="remove-caret" value="${items.quantity}" />
          <span class="increment">+</span>
        </div>
      </div>
    </div>
  `;
})
calcTotalPrice(productStorage);
calcTotalQuantity(productStorage);
cartProduct.innerHTML = html;

}

showProduct()

// price products
function calcTotalPrice(productStorage) {
  let totalPrice = 0;
  productStorage.map((el) => {
    const { quantity, price } = el;
    totalPrice += price * quantity;
  });
  let totalAmount = document.querySelector(".cart-total .price");
  totalAmount.innerHTML = `£${totalPrice.toFixed(2)}`;
}

// quantity products
// function calcTotalQuantity(productStorage) {
//   let totalQuantity = 0;
//   productStorage.map((el) => {
//     const { quantity } = el;
//     productStorage.quantity = 1;
//     totalQuantity += quantity;
//   });
//   let getData = document.querySelector(".shopping > span");
//   +getData.setAttribute("data-count", totalQuantity);
// }