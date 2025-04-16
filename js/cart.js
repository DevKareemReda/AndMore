
function showProducts() {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let html = ""
  productStorage.map(items=> {
    html += `

    <tr>
    <td
      data-title="product"
      class="table-products d-flex justify-content-between align-items-center"
    >
      <span
        class="close"
        onclick="closeProducts(${items.id},parentElement)"
        >×</span
      >
      <div class="product-thumbnails">
        <img
          src="${items.image}"
          loading="lazy"
          alt="Not found"
          class="un"
        />
      </div>
      <a href="details.html?id=3" class="float-end"
        >${items.name}</a
      >
    </td>
    <td data-title="price">
      <span class="woocommerce-price-amount float-end">
        <span>K.D </span>${items.price}
      </span>
    </td>
    <td data-title="quantity">
      <form action="#" class="float-end">
      <input type="number" size="4" min="0" value="1" oninput="changeNums(${items.id},this,${items.price})">
      </form>
      </td>
    <td data-title="subtotal" class="update">
      <span class="woocommerce-price-amount amount float-end"
        >K.D ${items.price * items.quantity}</span
      >
    </td>
  </tr>
    `
  })
  document.querySelector(".table-cart tbody").innerHTML = html;calcSubTotalPrice(productStorage)
  calcTotalPrice(productStorage)
  calcTotalQuantity(productStorage)
}

showProducts()


// price products
function calcTotalPrice(productStorage) {
  let totalPrice = 0;
  productStorage.map((el) => {
    const { quantity, price } = el;
    totalPrice += price * quantity;
  });
  let totalAmount = document.querySelector(".cart-total .price");
  totalAmount.innerHTML = `KWD ${totalPrice.toFixed(2)}`;
}

// quantity products
function calcTotalQuantity(productStorage) {
  let totalQuantity = 0;
  productStorage.map((el) => {
    const { quantity } = el;
    productStorage.quantity = 1;
    totalQuantity += quantity;
  });
  let cartQuantity = document.querySelectorAll(".cart-quantity");
  cartQuantity.forEach(items=> items.innerHTML = totalQuantity)
}

// remove products from storage
function closeProducts(id, parent) {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let removeItems = productStorage.filter((el) => el.id !== id);
  localStorage.setItem("saved", JSON.stringify(removeItems));
  parent.style.opacity = ".5";

  setTimeout(() => {
    if (removeItems.length == 0) {
      document.querySelector(".cart-product").innerHTML = " Not Found! ";
    }
    calcTotalQuantity(removeItems);
    calcTotalPrice(removeItems);
    showProducts(removeItems);
    parent.remove();
  }, 1000);
}

function calcSubTotalPrice(productStorage) {
  let cartTotal = document.querySelectorAll(".summary-box .total-all");
  let totalPrice = 0;
  productStorage.map((el) => (totalPrice += el.price * el.quantity));
  cartTotal.forEach((el) => (el.innerHTML = "KWD" + totalPrice.toFixed(2)));
}

function changeNums(id, e, price) {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let getId = productsData.find((el) => el.id === id);
  let loopProducts = productStorage.find((el) => el.id === getId.id);
  if (loopProducts) {
    loopProducts.quantity = +e.value;
  } else {
    productStorage.push(loopProducts);
  }
  e.parentElement.parentElement.nextElementSibling.children[0].textContent =
    "KWD" + (e.value * price).toFixed(2);
  localStorage.setItem("saved", JSON.stringify(productStorage));
  showProducts(productStorage);
  // calcSubTotalPrice(productStorage);
  // calcQuantityToClose(e);
  // if (productStorage.length == 0) removeEmpty();
}