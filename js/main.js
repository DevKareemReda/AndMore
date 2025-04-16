const openSearch = document.querySelector(".search");
const closeSearch = document.querySelector(".search-inner .close");
const searchOver = document.querySelector(".search-overlay")

window.onclick = function (e) {
  if (e.target == searchOver) {
    searchOver.classList.remove("active")
    searchOver.children[0].classList.remove("active")
  }
}

openSearch.onclick = function () {
  searchOver.classList.add("active")
  searchOver.children[0].classList.add("active")
}

closeSearch.onclick = function () {
  searchOver.classList.remove("active")
  searchOver.children[0].classList.remove("active")
}


const openCart = document.querySelectorAll(".shopping");
const closeCart = document.querySelector(".cart-top .close");
const carthOver = document.querySelector(".cart-overlay")

window.addEventListener("click", function (e) {
  if (e.target == carthOver) {
    carthOver.classList.remove("active")
    carthOver.children[0].classList.remove("active")
  }
})

openCart.forEach(items=> {
  items.onclick = function () {
    carthOver.classList.add("active")
    carthOver.children[0].classList.add("active")
  }
})

closeCart.onclick = function () {
  carthOver.classList.remove("active")
  carthOver.children[0].classList.remove("active")
}

let openFilter = document.querySelector(".filter");
let filterMenu = document.querySelector(".filter-menu");
let filterOverlay = document.querySelector(".filter-overlay");
openFilter.onclick = function () {
  filterMenu.classList.toggle("active")
  if (filterMenu.classList.contains("active")) {
    filterOverlay.classList.add("active")
  } else {
    filterOverlay.classList.remove("active")
  }
}

window.onload = function () {
  filterMenu.classList.remove("active")
}

let openCategory = document.querySelector(".category label")

openCategory.onclick = function() {
  this.nextElementSibling.classList.toggle("active")
}