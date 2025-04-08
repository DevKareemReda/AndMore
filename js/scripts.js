const products = [
  {
    id: 1,
    images: "images/product_01.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 28,
    discount: 28,
    precentage: 50,
    currently: "حصري",
  },
  {
    id: 2,
    images: "images/product_02.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 22,
  },
  {
    id: 3,
    images: "images/product_03.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 18,
  },
  {
    id: 4,
    images: "images/product_04.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 33,
    discount: 28,
    precentage: 50,
    currently: "حصري",
  },
  {
    id: 5,
    images: "images/product_05.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 28,
    discount: 28,
    precentage: 50,
    currently: "حصري",
  },
  {
    id: 6,
    images: "images/product_02.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 54,
  },
  {
    id: 7,
    images: "images/product_03.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 5,
  },
  {
    id: 8,
    images: "images/product_04.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 11,
    discount: 23,
    precentage: 50,
    currently: "حصري",
  },
  {
    id: 9,
    images: "images/product_05.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 7,
    discount: 28,
    precentage: 50,
    currently: "حصري",
  },
  {
    id: 10,
    images: "images/product_05.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 77,
  },
  {
    id: 11,
    images: "images/product_05.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 36,
  },

  {
    id: 12,
    images: "images/product_05.png",
    title: "جاكيت رجالي أنيق بقلنسوة مبطن بالفليس",
    price: 120,
    discount: 28,
    precentage: 50,
    currently: "حصري",
  },
]

const addProduct = document.querySelector(".add-product");

products.map(items=> {
  let html = "";
  html = `
      <div class="col-lg-3 col-sm-6 mt-4">
          <div class="product-inner text-center">
            <div class="product-top d-flex justify-content-between">
              ${items.currently ? `<p>${items.currently}</p>` : `<p></p>`}
              <i class="fa-regular fa-heart"></i>
            </div>
          <img src=${items.images} alt=${items.images} class="img-fluid">
          <div class="product-desc">
            <h3 class="text-right"><a href="details.html">${items.title}</a></h3>
          </div>
          <div class="product-footer d-flex justify-content-between align-items-center mt-2">
            <span class="right d-flex flex-column align-items-center">

              ${items.discount ? `<span class="discount">${items.discount} KWD</span>` : `<span class="discount"></span>`}

              <span class="price">${items.price.toFixed(2)} KWD</span>
            </span>
            ${items.precentage ? `<span class="precent">${items.precentage}%</span>` : `<span class=""></span>`}

          </div>
        </div>
        </div>
  `
  addProduct.innerHTML += html;
})
