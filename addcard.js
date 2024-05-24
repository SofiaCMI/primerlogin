let cart = [];
let total = 0;

function addCart(product, price) {

  cart.push({ product, price });
  total += price;
  updatecart()
}

function updatecart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const Div = document.createElement("div");
    Div.innerHTML = `
    <p>${item.product}</p>
    <p>S/ ${item.price}</p>
    <button class="btn btn-warning border-radius text-light" onclick="removeItem(${cart.indexOf(item)})">Remove</button>
    `;
    const li = document.createElement("li");
    li.appendChild(Div);
    cartItems.appendChild(li);
  });
  const totalElement = document.getElementById("total");
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updatecart();
}

function showCart() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}