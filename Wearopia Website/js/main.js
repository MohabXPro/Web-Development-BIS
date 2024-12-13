let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
  const product = cart.find((item) => item.productId === productId);
  if (product) {
    product.quantity++;
  } else {
    cart.push({ productId, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

function displayCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = cart.length
    ? cart
        .map(
          (item) => `
        <div class="cart-item">
            <p>Product ID: ${item.productId}</p>
            <p>Quantity: ${item.quantity}</p>
        </div>
    `
        )
        .join("")
    : "<p>Your cart is currently empty. Start shopping to add items to your cart.</p>";
}

if (window.location.pathname.includes("cart.html")) {
  displayCart();
}