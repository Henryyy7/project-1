# 🛍️ Vogue Store – Multi-Page E-Commerce UI

A modern, responsive, and lightweight **e-commerce storefront** built using **Vanilla JavaScript, HTML5, and CSS3**.  
This project delivers a smooth **5-page shopping flow** with a **persistent cart experience**, designed with a clean UI and mobile-first approach.

---

## 🚀 Features

- **Seamless User Flow**  
  Logic-driven navigation from product selection to successful purchase.

- **Persistent Shopping Cart**  
  Uses `localStorage` to retain cart items even after page refresh or navigation.

- **Fully Responsive Design**  
  Mobile-first layout using **CSS Grid** and **Flexbox**, adaptable to all screen sizes.

- **Dynamic Product Rendering**  
  Products are injected into the DOM via JavaScript, allowing easy catalog updates.

- **Clean & Minimal UI**  
  Smooth transitions, hover effects, and a modern aesthetic.

---

## 📂 Project Structure

| File | Description |
|------|------------|
| `index.html` | Home Page – Hero section and call to action |
| `shop.html` | Product Catalog – Displays product grid with **Add to Cart** |
| `cart.html` | Cart Review – Shows selected items and total price |
| `checkout.html` | Checkout – Captures user details and confirms purchase |
| `success.html` | Order Confirmation – Final success page |
| `style.css` | Global Styles – Layout, typography, responsiveness |
| `script.js` | Core Logic – Product data, cart state, DOM updates |

---

## 🛠️ Setup Instructions

1. **Clone or Download**  
   Download the project files or clone the repository.

2. **Folder Structure**  
   Ensure all files are placed in a single project folder.

3. **Verify File Paths**  
   - Link `style.css` inside the `<head>`
   - Link `script.js` before closing the `<body>` tag

4. **Launch the App**  
   Open `index.html` in any modern browser:
   - Chrome  
   - Firefox  
   - Edge  

✅ **No server required** — runs entirely on Vanilla JS and LocalStorage.

---

## 🧠 How the Cart Works

The cart uses a simple and effective state management approach:

- **Selection**  
  Clicking **Add to Cart** pushes the product object into a cart array.

- **Storage**  
  Cart data is stored using LocalStorage:
  ```js
  localStorage.setItem('CART_DATA', JSON.stringify(cart));
