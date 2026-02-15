# Modern-Mart 🛍️ | WhatsApp E-Commerce Solution

![Project Banner](https://via.placeholder.com/1200x400?text=Modern-Mart+Fashion+Store+Preview)
**Modern-Mart** is a lightweight, mobile-first e-commerce web application designed for small businesses to sell fashion and lifestyle products. It features a modern, "App-like" UI similar to **Meesho/Myntra** and handles checkout seamlessly via **WhatsApp**, requiring zero backend infrastructure.

---

## 🚀 Features

### 🎨 UI/UX Design
* **Mobile-First Experience:** Optimized touch targets, horizontal scrolling, and sticky headers.
* **Modern Aesthetics:** "Royal Fuschia" gradient theme, soft shadows, and clean typography (Poppins).
* **Animations:** "Heart Pop" animation for wishlist and smooth transitions.

### 🛒 Core Functionality
* **Smart Product Logic:** Size selectors (`S, M, L, XL`) appear *only* for clothing. Accessories (Watches, Bags) automatically skip size selection.
* **Persistent State:** **Wishlist** and **Cart** data are saved in the browser (`localStorage`), so users don't lose items on refresh.
* **Dynamic Categories:** Filter between Men, Women, and Kids with an intuitive pill-navigation bar.

### ⚡ Checkout System
* **Address Form:** Built-in modal to collect Name, Address, and Phone number before purchase.
* **WhatsApp Integration:** Auto-generates a formatted message including:
    * Customer Address.
    * Product Name & Price.
    * Selected Size.
    * **Product Image Link** (for visual proof).
    * Unique Product ID.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+).
* **Icons:** Unicode & CSS Shapes (No heavy icon libraries).
* **Images:** Unsplash Source API (High-quality, reliable fashion imagery).
* **Database:** LocalStorage (Client-side) / Static Arrays.

---

## 📸 Screenshots

| Home Page | Product Page | Checkout Form |
|:---:|:---:|:---:|
| ![Home](img/home.jpg/200x400?text=Home) | ![Product](https://via.placeholder.com/200x400?text=Product) | ![Checkout](https://via.placeholder.com/200x400?text=Form) |

---

## ⚙️ Configuration

To use this for your own business or client, simply update the **WhatsApp Number** in `script.js`.

1.  Open `script.js`.
2.  Scroll to the `sendWhatsapp()` function (approx. line 410).
3.  Change the number variable:

```javascript
// Replace with your 10-digit mobile number (Country Code 91 for India)
const sellerNumber = "919999999999"; 
