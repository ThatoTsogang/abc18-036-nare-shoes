// Example cart array to hold product IDs
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
  cart.push(productId);
  alert(`Product ${productId} added to cart!`);
  console.log("Current cart:", cart);
  
  // Optionally, you could save the cart to localStorage for persistence
  localStorage.setItem('cart', JSON.stringify(cart));
}
// Load cart from localStorage if exists
let savedCart = localStorage.getItem('cart');
if (savedCart) {
  cart = JSON.parse(savedCart);
}
// Initialize cart array from localStorage or empty
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count on the page
function updateCartCount() {
  const countElement = document.getElementById('cart-count');
  countElement.textContent = `Cart: ${cart.length}`;
}

// Call once on page load to update the cart count display
updateCartCount();

// Function to add a product to the cart
function addToCart(productId) {
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`Product ${productId} added to cart!`);
  updateCartCount();
  console.log("Cart now:", cart);
}
