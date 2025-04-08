
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


const openCart = document.querySelector(".shopping");
const closeCart = document.querySelector(".search-inner .close");
const carthOver = document.querySelector(".cart-overlay")

window.addEventListener("click", function (e) {
  if (e.target == carthOver) {
    carthOver.classList.remove("active")
    carthOver.children[0].classList.remove("active")
  }
})

openCart.onclick = function () {
  carthOver.classList.add("active")
  carthOver.children[0].classList.add("active")
}

closeCart.onclick = function () {
  carthOver.classList.remove("active")
  carthOver.children[0].classList.remove("active")
}

