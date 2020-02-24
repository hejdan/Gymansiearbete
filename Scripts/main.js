//Cart, amount of items in cart and total price of them
let cart = {
  totalItems: localStorage.getItem("storageTotalItems"),
  totalPrice: 0
};

//Items prices
let itemPrices = {
  redMousepad: 19.99,
  greenMousepad: 22.99,
  blueMousepad: 12.99,
  orangeMousepad: 15.99
};

//Localstorage


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
let greenCross = document.querySelector(".greenCross");
let blueCross = document.querySelector(".blueCross");
let redCross = document.querySelector(".redCross");
let orangeCross = document.querySelector(".orangeCross");

let navOpen = false;
let nav = document.getElementById("nav");

var navbar;

window.onload = closeNav();
window.onload = cart.totalItems = localStorage.getItem("storageTotalItems");
window.onload = checkCart();
window.onload = redPrice.textContent = itemPrices.redMousepad + "$";
window.onload = greenPrice.textContent = itemPrices.greenMousepad + "$";
window.onload = bluePrice.textContent = itemPrices.blueMousepad + "$";
window.onload = orangePrice.textContent = itemPrices.orangeMousepad + "$";
//window.onload = setInterval(getCrosses, 25);

//Adding red mousepad to cart
redBuy.addEventListener("click", () => {
  cart.totalItems++;
  cart.totalPrice += itemPrices.redMousepad;
  
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
clearCart.addEventListener("click", () => {
  cart.totalItems = 0;
  cart.totalPrice = 0;
  shoppingCart.classList.add("empty");
  itemsInCart.classList.add("totalItems-display");
  itemsInCart.innerHTML = cart.totalItems;
  localStorage.clear();
});

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

function openCloseGreenNav() {
  if (navOpen === false) {
      greenCross.classList.add("close");
      openNav();
      navOpen = true;
    
  } else {
      greenCross.classList.remove("close");
      closeNav();
      navOpen = false;
  }
}

function openCloseBlueNav() {
  if (navOpen === false) {
      blueCross.classList.add("close");
      openNav();
      navOpen = true;
    
  } else {
      blueCross.classList.remove("close");
      closeNav();
      navOpen = false;
  }
}

function openCloseRedNav() {
  if (navOpen === false) {
      redCross.classList.add("close");
      openNav();
      navOpen = true;
    
  } else {
      redCross.classList.remove("close");
      closeNav();
      navOpen = false;
  }
}

function openCloseOrangeNav() {
  if (navOpen === false) {
      orangeCross.classList.add("close");
      openNav();
      navOpen = true;
    
  } else {
      orangeCross.classList.remove("close");
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