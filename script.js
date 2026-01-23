// 1. Product Database
const products = [
    { id: 1, name: "Minimalist Sneakers", price: 89, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" },
    { id: 2, name: "Smart Urban Watch", price: 199, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" },
    { id: 3, name: "Premium Backpack", price: 120, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400" },
    { id: 4, name: "Wireless Headphones", price: 250, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" }
];

// 2. Initialize Cart
let cart = JSON.parse(localStorage.getItem('CART_DATA')) || [];

// 3. Update Cart UI globally
function updateUI() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.innerText = cart.length;
}

// 4. Add to Cart
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    localStorage.setItem('CART_DATA', JSON.stringify(cart));
    updateUI();
    alert(`${item.name} added to cart!`);
}

// 5. Render Shop Page
function renderShop() {
    const shopGrid = document.getElementById('shop-grid');
    if (!shopGrid) return;
    products.forEach(p => {
        shopGrid.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">$${p.price}</p>
                <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });
}

// 6. Render Cart Page
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = "<h3>Your cart is empty.</h3>";
        return;
    }

    let total = 0;
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding:10px 0;">
                <img src="${item.img}" style="width:50px; border-radius:5px;">
                <span>${item.name}</span>
                <span>$${item.price}</span>
            </div>
        `;
    });
    totalEl.innerText = total;
}

// 7. Clear Cart on Success
function finalizeOrder() {
    localStorage.removeItem('CART_DATA');
}

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    renderShop();
    renderCart();
});