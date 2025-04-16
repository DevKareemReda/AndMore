let checkoutInner = document.querySelector(".checkout-left .checkout-inner");

let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
let html = "";
productStorage.map((items) => {
  html += `

<div class="checkout-items d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img src="${items.image}" alt="product_01">
                <a href="#">${items.name}</a>
                </div>
                  <div class="text-left">
                    <p class="discount">${items.discount.toFixed(2)} KWD</p>
                  <p class="price">${items.price.toFixed(2)} KWD</p>
                  </div>
              </div>
    `;
});
checkoutInner.innerHTML = html;

let allTabsCheck = document.querySelectorAll(".tabs-checkout");

allTabsCheck.forEach((el) => {
  el.onclick = function () {
    allTabsCheck.forEach((items) => items.classList.remove("active"));
    this.classList.add("active");
    document
      .querySelectorAll(".tab-hidden")
      .forEach((el) => el.classList.remove("active"));
    document
      .querySelector("#" + this.getAttribute("data-tab"))
      .classList.add("active");
  };
});


