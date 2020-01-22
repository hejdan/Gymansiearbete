//Cart, amount of items in cart and total price of them
let cart = {
  totalItems: 0,
  totalPrice: 0
};
//Items prices, easey to change
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

//Setting prices on pricetags when page is loaded
window.onload = redPrice.innerHTML = itemPrices.redMousepad + "$";
window.onload = greenPrice.innerHTML = itemPrices.greenMousepad + "$";
window.onload = bluePrice.innerHTML = itemPrices.blueMousepad + "$";
window.onload = orangePrice.innerHTML = itemPrices.orangeMousepad + "$";

//Adding red mousepad to cart
redBuy.addEventListener("click", () => {
  cart.totalItems++;
  cart.totalPrice += itemPrices.redMousepad;
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
  if (cart.totalItems > 0) {
    shoppingCart.classList.remove("empty");
    itemsInCart.classList.remove("totalItems-display");
    itemsInCart.innerHTML = cart.totalItems;
  }
});

clearCart.addEventListener("click", () => {
  cart.totalItems = 0;
  cart.totalPrice = 0;
  shoppingCart.classList.add("empty");
  itemsInCart.classList.add("totalItems-display");
  itemsInCart.innerHTML = cart.totalItems;
});
