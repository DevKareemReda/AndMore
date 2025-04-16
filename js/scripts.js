$(() => {
  $(".owl-carousel").owlCarousel({
    items: 4,
    rtl: true,
    loop: true,
    responsiveClass:true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
  });
  $(".owl-brand").owlCarousel({
    items: 4,
    loop: true,
    responsiveClass:true,
    responsive: {
      0: {
          items: 2,
      },
      500: {
          items: 3
      },
      1000: {
          items: 4
      }
  }
  });
});

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

if (window.location.href.split("/").slice(-1).join("") === "index.html") {
  const addProduct = document.querySelector(".add-product");

  productsData.forEach(product => {
    let html = "";
    html = `
      <div class="product-items">
        <div class="text-center">
          <img src="${product.image}" alt="product_${product.id}" />
          ${product.recommended ? `<span class="recommanded">موصي بها</span>` : ""}
        </div>
        <div class="product-desc">
          <a href="details.html">${product.name.split(" ", 3).join(" ")}</a>
          <div class="d-sm-flex justify-content-between align-items-center mt-3 desc">
            <p class="price">${product.price.toFixed(2)} KWD</p>
                      ${product.discount ? `<p class="discount">KWD ${product.discount}</p>` : `<p class="discount"></p>`}


          </div>
          <div class="d-flex justify-content-between align-items-center mt-3 buy">

            ${product.actionType === "buy" ? `<button class="btn btn-primary" ,
              quantity: onclick=addCart(${product.id})>اشترى الآن</button>` : `<button class="btn btn-primary">عرض</button>` }

            <i class="fa-regular fa-heart"></i>
          </div>
          <i class="fa-solid fa-expand" onclick=showPopup(${product.id})></i>
        </div>
      </div>
    `;
    addProduct.innerHTML += html;
  });
}
const cartProduct = document.querySelector(".cart-product");

const addCart = (id) => {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  const showId = productsData.find(items => items.id === id);

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
          <p>${items.price.toFixed(2) *  items.quantity} KWD &times; <span>${items.quantity}</span></p>
        </div>
        <div class="plus-dash mt-3">
          <span class="decrement">-</span>
          <input type="number" class="remove-caret" value="${items.quantity}" />
          <span class="increment">+</span>
        </div>
        <span class="close-items" onclick="closeProducts(${id},parentElement.parentElement)">&times;</span>
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
          <p>${items.price.toFixed(2)  *  items.quantity} KWD &times; <span>${items.quantity}</span></p>
        </div>
        <div class="plus-dash">
          <span class="decrement">-</span>
          <input type="number" class="remove-caret" value="${items.quantity}" />
          <span class="increment">+</span>
        </div>
        <span class="close-items" onclick="closeProducts(${items.id},parentElement.parentElement)">&times;</span>
      </div>
    </div>
  `;
})
calcTotalPrice(productStorage);
calcTotalQuantity(productStorage);
cartProduct.innerHTML = html;

}

showProduct()


const showPopup = (id) => {
  const showId = productsData.find(items=> items.id == id);
  console.log(showId);

  document.querySelector(".add-popup").innerHTML = `

  <div class="col-md-6">
  <div class="text-center">
    <img
      src="${showId.image}"
      alt="product_01"
      class="img-fluid"
    />
    <div class="img-footer">
      <img src="${showId.image}" alt="" />
      <img src="${showId.image}" alt="" />
      <img src="${showId.image}" alt="" />
    </div>
  </div>
</div>
<div class="col-md-6 mt-5 mt-md-0">
  <div class="details-items">
    <div class="details-top">
      <h3>${showId.name}</h3>
      <p>${showId.price} KWD</p>
    </div>
    <div class="details-center">
      <p>الماركة : ايفنايت</p>
      <div class="d-flex mt-4">
        <ul class="stars d-flex">
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
          <li><i class="fa-solid fa-star"></i></li>
        </ul>
        <span class="mx-3">|</span>
        <div class="rate">30 التقييمات</div>
      </div>

      <div class="plus-dash mt-3">
        <span class="decrement">-</span>
        <input type="number" class="remove-caret" value="0" />
        <span class="increment">+</span>
      </div>
      <div class="d-flex align-items-center mt-3">
        <button class="btn btn-primary">اشترى الأن</button>
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>

    <div class="details-desc mt-5">
      <h3>الوصف</h3>
      <p>
        تمتع بالفخامة والسكينة مع المبخر الاكتروني الفاخر، الذي
        يضيف لمسة من الأناقة والرائحة الجميلة إلى مساحتك المفضلة.
      </p>
      <div class="mt-4">
        <h3>المزايا</h3>
        <p>- يعمل عن طريق الشحن</p>
        <p>- متعدد الاستخدامات</p>
        <p>- يوفر الشحن الكامل قدرة كافية لإشعال 70 قطعة فحم</p>
        <p>- يعمل مؤشر الضوء عند اشتعال المبخر</p>
      </div>
      <div class="mt-4">
        <h3>الاستعمال</h3>
        <p>- للتشغيل، يتم الضغط على زر التشغيل/الايقاف مرتين</p>
        <p>
          - لا حاجة للضغط على زر التشغيل/الايقاف عند الانتهاء،
          سيتوقف المبخر عن العمل تلقائياً
        </p>
        <p>
          - مفتاح التشغيل والإيقاف للسلامة: إذا تم الضغط على زر
          التشغيل/الايقاف مرتين وكان مفتاح التشغيل مغلقاً، فلن
          يعمل المبخر
        </p>
        <p>- مكن استخدامه فقط مع فحم سريع الإشتعال</p>
        <p>- وقت الشحن: ساعة ونصف</p>
      </div>
      <div class="mt-4">
        <p>- الكفالة: 6 أشهر</p>
      </div>
      <div class="mt-4">
        <h3>مواصفات</h3>
        <p>ORL-00005640 SKU</p>
      </div>
    </div>
  </div>
</div>
  `
  document.querySelector(".popup-overlay").classList.add("active");

}

document.querySelector(".close-popup").onclick = function () {
  document.querySelector(".popup-overlay").classList.remove("active");
}
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
function closeProducts(id) {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let removeItems = productStorage.filter((el) => el.id !== id);
  localStorage.setItem("saved", JSON.stringify(removeItems));
  console.log(removeItems.length == 0);

  setTimeout(() => {
    if (removeItems.length == 0) {
      document.querySelector(".cart-product").innerHTML = " Not Found! ";
    }
    calcTotalQuantity(removeItems);
    calcTotalPrice(removeItems);
    showProduct(removeItems);
  }, 1000);
}