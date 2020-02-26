//Cart, amount of items in cart and total price of them
let cart = {
  totalItems: localStorage.getItem("storageTotalItems"),
  totalPrice: localStorage.getItem("storageTotalPrice")
};

//Items prices
let itemPrices = {
  redMousepad: 19.99,
  greenMousepad: 22.99,
  blueMousepad: 12.99,
  orangeMousepad: 15.99
};

//Variable Price and button to buy every mousepad
let shoppingCart = document.getElementById("shoppingCart");
let itemsInCart = document.getElementById("itemsInCart");

let redBuy = document.getElementById("redBuy");
let redPrice = document.getElementById("redPrice");

let greenBuy = document.getElementById("greenBuy");
let greenPrice = document.getElementById("greenPrice");

let blueBuy = document.getElementById("blueBuy");
let bluePrice = document.getElementById("bluePrice");

let orangeBuy = document.getElementById("orangeBuy");
let orangePrice = document.getElementById("orangePrice");

//Variable to clear cart
let clearCart = document.getElementById("clearCart");

//Open and close nav variable
let cross = document.querySelector(".cross");

let navOpen = false;
let nav = document.getElementById("nav");

var navbar;

let showCartTotalItems = document.getElementById("totalItems");
let showCartTotalPrice = document.getElementById("totalPrice");

window.onload = Init();

//Adding red mousepad to cart
redBuy.addEventListener("click", () => {
  cart.totalItems++;
  cart.totalPrice += itemPrices.greenMousepad;

  if (typeof(Storage) !== "undefined") {
    if (localStorage.storageTotalItems) {
      localStorage.storageTotalItems = Number(localStorage.storageTotalItems)+1;
    } else {
      localStorage.storageTotalItems = 1;
    }
  }
  if (cart.totalItems > 0) {
    shoppingCart.classList.remove("empty");
    itemsInCart.classList.remove("totalItems-display");
    itemsInCart.innerHTML = cart.totalItems;
  }
});

//Adding green mousepad to cart
greenBuy.addEventListener("click", () => {
  cart.totalItems++;
  cart.totalPrice += itemPrices.greenMousepad;

  if (typeof(Storage) !== "undefined") {
    if (localStorage.storageTotalItems) {
      localStorage.storageTotalItems = Number(localStorage.storageTotalItems)+1;
    } else {
      localStorage.storageTotalItems = 1;
    }
  }
  if (cart.totalItems > 0) {
    shoppingCart.classList.remove("empty");
    itemsInCart.classList.remove("totalItems-display");
    itemsInCart.innerHTML = cart.totalItems;
  }
});

//Adding blue mousepad to cart
blueBuy.addEventListener("click", () => {
  cart.totalItems++;
  cart.totalPrice += itemPrices.blueMousepad;
  if (typeof(Storage) !== "undefined") {
    if (localStorage.storageTotalItems) {
      localStorage.storageTotalItems = Number(localStorage.storageTotalItems)+1;
    } else {
      localStorage.storageTotalItems = 1;
    }
  }
  if (cart.totalItems > 0) {
    shoppingCart.classList.remove("empty");
    itemsInCart.classList.remove("totalItems-display");
    itemsInCart.innerHTML = cart.totalItems;
  }
});

//Adding orange mousepad to cart
orangeBuy.addEventListener("click", () => {
  cart.totalItems++;
  cart.totalPrice += itemPrices.orangeMousepad;
  if (typeof(Storage) !== "undefined") {
    if (localStorage.storageTotalItems) {
      localStorage.storageTotalItems = Number(localStorage.storageTotalItems)+1;
    } else {
      localStorage.storageTotalItems = 1;
    }
  }
  if (cart.totalItems > 0) {
    shoppingCart.classList.remove("empty");
    itemsInCart.classList.remove("totalItems-display");
    itemsInCart.innerHTML = cart.totalItems;
  }
});

//Removing everything from cart
function ClearCart(){
  cart.totalItems = 0;
  cart.totalPrice = 0;
  shoppingCart.classList.add("empty");
  itemsInCart.classList.add("totalItems-display");
  itemsInCart.innerHTML = cart.totalItems;
  localStorage.clear();
}

//Opening and closing nav
cross.addEventListener("click", () => {
  openCloseNav();
});

function openCloseNav() {
  if (navOpen === false) {
      cross.classList.add("close");
      openNav();
      navOpen = true;
    
  } else {
      cross.classList.remove("close");
      closeNav();
      navOpen = false;
  }
}

function openNav() {
  nav.style.top = "0px";
}
function closeNav() {
  nav.style.top = "-10vh";
}

function checkCart(){
  if (cart.totalItems > 0) {
    shoppingCart.classList.remove("empty");
    itemsInCart.classList.remove("totalItems-display");
    itemsInCart.innerHTML = cart.totalItems;

  }
}

function Init(){
if(window.location.pathname == "/Pages/cart.html"){
    
    showCartTotalItems.innerText = cart.totalItems;
    checkCart();
}
else{
closeNav();
checkCart();
redPrice.textContent = itemPrices.redMousepad + "$";
greenPrice.textContent = itemPrices.greenMousepad + "$";
orangePrice.textContent = itemPrices.orangeMousepad + "$";
bluePrice.textContent = itemPrices.blueMousepad + "$";
}
}

function goToCart(){
  location.href = "../Pages/cart.html";
}


