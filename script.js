/* ================================================================
     MODERN MART — JAVASCRIPT
     Sections:
       1. Product Data (30+ products)
       2. State Management (localStorage)
       3. Render Engine (cards, grids)
       4. Cart Logic
       5. Wishlist Logic
       6. Checkout Logic
       7. Search Logic
       8. UI Interactions (tabs, nav pills, etc.)
       9. Init
  ================================================================ */

  /* ================================================================
     1. PRODUCT DATA
     sub-category keys:
       dress-m  → Men's Dress     (sizes: S,M,L,XL)
       watch    → Men's Watch     (no size)
       shoes    → Men's Shoes     (sizes: 6-10)
       dress-l  → Ladies' Dress   (sizes: S,M,L,XL)
       jewels   → Ladies' Jewels  (no size)
       slippers → Ladies' Slippers(sizes: 6-10)
       dress-k  → Kids' Dress     (sizes: S,M,L,XL)
       toys     → Toys            (no size)
  ================================================================ */
  const PRODUCTS = [

    /* ─── MEN'S COLLECTION ─── */
    {
      id: 1001,
      name: "Navy Slim Fit Blazer",
      section: "men", sub: "dress-m",
      price: 2499, mrp: 3499,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
      desc: "Sharp navy slim-fit blazer for formal occasions."
    },
    {
      id: 1002,
      name: "Classic White Oxford Shirt",
      section: "men", sub: "dress-m",
      price: 899, mrp: 1299,
      badge: "new",
      img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500&q=80",
      desc: "Timeless white Oxford shirt for everyday elegance."
    },
    {
      id: 1003,
      name: "Charcoal Slim Chinos",
      section: "men", sub: "dress-m",
      price: 1199, mrp: 1799,
      badge: null,
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4d06?w=500&q=80",
      desc: "Comfortable charcoal slim chinos for a modern look."
    },
    {
      id: 1004,
      name: "Indigo Denim Jacket",
      section: "men", sub: "dress-m",
      price: 1799, mrp: 2599,
      badge: "sale",
      img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80",
      desc: "Classic indigo denim jacket for casual styling."
    },
    {
      id: 1005,
      name: "Chronograph Steel Watch",
      section: "men", sub: "watch",
      price: 4999, mrp: 7999,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      desc: "Premium steel chronograph with sapphire glass."
    },
    {
      id: 1006,
      name: "Minimalist Leather Watch",
      section: "men", sub: "watch",
      price: 2799, mrp: 3999,
      badge: "new",
      img: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&q=80",
      desc: "Clean leather-strap minimalist dress watch."
    },
    {
      id: 1007,
      name: "Smart Sports Watch",
      section: "men", sub: "watch",
      price: 3499, mrp: 4999,
      badge: null,
      img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
      desc: "Water-resistant smart sports watch with heart rate monitor."
    },
    {
      id: 1008,
      name: "Brown Derby Leather Shoes",
      section: "men", sub: "shoes",
      price: 2199, mrp: 3299,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=500&q=80",
      desc: "Hand-stitched brown derby shoes, full grain leather."
    },
    {
      id: 1009,
      name: "White Sneaker Low-Top",
      section: "men", sub: "shoes",
      price: 1499, mrp: 2199,
      badge: "new",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      desc: "Clean white canvas low-top sneakers."
    },
    {
      id: 1010,
      name: "Black Chelsea Boots",
      section: "men", sub: "shoes",
      price: 2799, mrp: 3999,
      badge: "sale",
      img: "https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=500&q=80",
      desc: "Sleek black Chelsea boots with elastic side panels."
    },
    {
      id: 1011,
      name: "Linen Kurta Set (Olive)",
      section: "men", sub: "dress-m",
      price: 1399, mrp: 1999,
      badge: null,
      img: "https://images.unsplash.com/photo-1609803384069-19f3f8165e6c?w=500&q=80",
      desc: "Breathable olive linen kurta for festivals & casual wear."
    },
    {
      id: 1012,
      name: "Gold Dial Aviator Watch",
      section: "men", sub: "watch",
      price: 5999, mrp: 8500,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1548171916-c8fd1dc71f68?w=500&q=80",
      desc: "Bold gold-dial aviator watch with pilot strap."
    },

    /* ─── LADIES' COLLECTION ─── */
    {
      id: 2001,
      name: "Floral Maxi Dress",
      section: "ladies", sub: "dress-l",
      price: 1599, mrp: 2499,
      badge: "new",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
      desc: "Flowing floral maxi dress perfect for summer."
    },
    {
      id: 2002,
      name: "Elegant Silk Saree (Rose)",
      section: "ladies", sub: "dress-l",
      price: 3499, mrp: 4999,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=80",
      desc: "Luxurious rose silk saree for festive occasions."
    },
    {
      id: 2003,
      name: "Classic Kurti (Teal)",
      section: "ladies", sub: "dress-l",
      price: 899, mrp: 1299,
      badge: null,
      img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&q=80",
      desc: "Comfortable teal printed kurti for daily wear."
    },
    {
      id: 2004,
      name: "Off-Shoulder Bodycon Dress",
      section: "ladies", sub: "dress-l",
      price: 1299, mrp: 1899,
      badge: "sale",
      img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80",
      desc: "Elegant off-shoulder bodycon for evening events."
    },
    {
      id: 2005,
      name: "Gold Kundan Necklace Set",
      section: "ladies", sub: "jewels",
      price: 1899, mrp: 2799,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500&q=80",
      desc: "Handcrafted gold-tone Kundan necklace with earrings."
    },
    {
      id: 2006,
      name: "Diamond-Cut Bangle Set",
      section: "ladies", sub: "jewels",
      price: 1199, mrp: 1799,
      badge: "new",
      img: "https://images.unsplash.com/photo-1573408301185-9519f94f6b5b?w=500&q=80",
      desc: "Set of 6 diamond-cut gold-plated bangles."
    },
    {
      id: 2007,
      name: "Pearl Drop Earrings",
      section: "ladies", sub: "jewels",
      price: 699, mrp: 999,
      badge: null,
      img: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=500&q=80",
      desc: "Delicate freshwater pearl drop earrings in gold setting."
    },
    {
      id: 2008,
      name: "Floral Embroidered Juttis",
      section: "ladies", sub: "slippers",
      price: 799, mrp: 1299,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&q=80",
      desc: "Handcrafted floral embroidered juttis — ethnic chic."
    },
    {
      id: 2009,
      name: "Comfortable Block Heel Sandal",
      section: "ladies", sub: "slippers",
      price: 1199, mrp: 1699,
      badge: "new",
      img: "https://images.unsplash.com/photo-1561861422-a549073e547a?w=500&q=80",
      desc: "Padded block-heel sandal for all-day comfort."
    },
    {
      id: 2010,
      name: "Soft Sole Home Slippers",
      section: "ladies", sub: "slippers",
      price: 499, mrp: 799,
      badge: "sale",
      img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500&q=80",
      desc: "Ultra-soft memory foam home slippers."
    },
    {
      id: 2011,
      name: "Anarkali Suit (Purple)",
      section: "ladies", sub: "dress-l",
      price: 2299, mrp: 3199,
      badge: null,
      img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=80",
      desc: "Gorgeous purple embroidered Anarkali suit set."
    },
    {
      id: 2012,
      name: "Rose Gold Charm Bracelet",
      section: "ladies", sub: "jewels",
      price: 899, mrp: 1299,
      badge: "new",
      img: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=500&q=80",
      desc: "Adjustable rose gold bracelet with heart charms."
    },

    /* ─── KIDS' COLLECTION ─── */
    {
      id: 3001,
      name: "Dino Print Romper (Blue)",
      section: "kids", sub: "dress-k",
      price: 499, mrp: 799,
      badge: "new",
      img: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80",
      desc: "Adorable dino-print cotton romper for toddlers."
    },
    {
      id: 3002,
      name: "Princess Frock (Pink)",
      section: "kids", sub: "dress-k",
      price: 699, mrp: 999,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&q=80",
      desc: "Tulle princess frock with bow for little girls."
    },
    {
      id: 3003,
      name: "Mini Kurta Pyjama Set",
      section: "kids", sub: "dress-k",
      price: 799, mrp: 1199,
      badge: null,
      img: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=500&q=80",
      desc: "Festive kurta-pyjama set for boys — cotton rich."
    },
    {
      id: 3004,
      name: "Cartoon Hoodie & Jogger Set",
      section: "kids", sub: "dress-k",
      price: 999, mrp: 1499,
      badge: "sale",
      img: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=500&q=80",
      desc: "Cozy cartoon-print hoodie and jogger combo."
    },
    {
      id: 3005,
      name: "LEGO Classic Bricks Set (500pcs)",
      section: "kids", sub: "toys",
      price: 1999, mrp: 2799,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80",
      desc: "Classic 500-piece brick set for endless creativity."
    },
    {
      id: 3006,
      name: "Wooden Puzzle (Animals)",
      section: "kids", sub: "toys",
      price: 499, mrp: 799,
      badge: "new",
      img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&q=80",
      desc: "Colorful 24-piece wooden animal puzzle."
    },
    {
      id: 3007,
      name: "Remote Control Racing Car",
      section: "kids", sub: "toys",
      price: 1499, mrp: 2199,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      desc: "High-speed RC car with full directional control."
    },
    {
      id: 3008,
      name: "Soft Stuffed Teddy Bear",
      section: "kids", sub: "toys",
      price: 699, mrp: 999,
      badge: null,
      img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=500&q=80",
      desc: "30cm ultra-soft plush teddy bear, machine washable."
    },
    {
      id: 3009,
      name: "Unicorn Party Dress",
      section: "kids", sub: "dress-k",
      price: 899, mrp: 1299,
      badge: "new",
      img: "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=500&q=80",
      desc: "Sparkly unicorn-themed party dress for girls."
    },
    {
      id: 3010,
      name: "Art & Craft Activity Kit",
      section: "kids", sub: "toys",
      price: 849, mrp: 1199,
      badge: "sale",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80",
      desc: "All-in-one art kit: crayons, paints, stickers, clay."
    },
    {
      id: 3011,
      name: "School Uniform Combo (Boy)",
      section: "kids", sub: "dress-k",
      price: 1199, mrp: 1599,
      badge: null,
      img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500&q=80",
      desc: "Smart school shirt + trousers combo for boys."
    },
    {
      id: 3012,
      name: "Magnetic Building Tiles (48pcs)",
      section: "kids", sub: "toys",
      price: 2299, mrp: 3199,
      badge: "hot",
      img: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=500&q=80",
      desc: "STEM magnetic building tiles — 3D construction fun."
    },
  ];

  /* ================================================================
     SIZING CONFIG per sub-category
  ================================================================ */
  const SIZE_CONFIG = {
    "dress-m":   { type: "alpha",    opts: ["S","M","L","XL"] },
    "dress-l":   { type: "alpha",    opts: ["S","M","L","XL"] },
    "dress-k":   { type: "alpha",    opts: ["S","M","L","XL"] },
    "shoes":     { type: "numeric",  opts: [6,7,8,9,10] },
    "slippers":  { type: "numeric",  opts: [6,7,8,9,10] },
    "watch":     { type: "none",     opts: [] },
    "jewels":    { type: "none",     opts: [] },
    "toys":      { type: "none",     opts: [] },
  };

  /* Sub-category display names */
  const SUB_NAMES = {
    "dress-m": "Men's Dress", "watch": "Watch", "shoes": "Men's Shoes",
    "dress-l": "Ladies' Dress", "jewels": "Jewellery", "slippers": "Slippers",
    "dress-k": "Kids' Dress", "toys": "Toys",
  };

  /* Shop WhatsApp number (replace with actual) */
  const SHOP_WA_NUMBER = "919361034037";

  /* ================================================================
     2. STATE MANAGEMENT
  ================================================================ */
  let cart = [];
  let wishlist = [];
  /* checkoutItems: array of product IDs (either full cart or single product) */
  let checkoutItems = [];
  let checkoutSingleProduct = null; // if "Buy Now" on single product

  function loadState() {
    try {
      cart = JSON.parse(localStorage.getItem("mm_cart") || "[]");
      wishlist = JSON.parse(localStorage.getItem("mm_wishlist") || "[]");
    } catch(e) {
      cart = []; wishlist = [];
    }
  }

  function saveState() {
    localStorage.setItem("mm_cart", JSON.stringify(cart));
    localStorage.setItem("mm_wishlist", JSON.stringify(wishlist));
  }

  /* ================================================================
     3. RENDER ENGINE
  ================================================================ */

  /** Build a single product card element */
  function buildCard(product) {
    const sizeConf = SIZE_CONFIG[product.sub] || { type: "none", opts: [] };
    const inWish = wishlist.includes(product.id);
    const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.id = product.id;

    /* Build size HTML */
    let sizeHTML = "";
    if (sizeConf.type !== "none") {
      sizeHTML = `
        <div class="size-selector">
          <span class="size-label">Size:</span>
          <div class="size-options">
            ${sizeConf.opts.map(s => `<button class="size-opt" data-size="${s}">${s}</button>`).join("")}
          </div>
        </div>`;
    }

    /* Badge */
    const badgeHTML = product.badge
      ? `<span class="product-badge badge-${product.badge}">${product.badge.toUpperCase()}</span>`
      : "";

    /* Discount tag */
    const discountTag = discount > 0
      ? `<span style="font-size:11px;background:rgba(230,57,70,0.1);color:var(--clr-accent);padding:2px 8px;border-radius:4px;font-weight:700;">${discount}% OFF</span>`
      : "";

    card.innerHTML = `
      ${badgeHTML}
      <button class="btn-wish ${inWish ? 'wishlisted' : ''}" data-id="${product.id}" aria-label="Wishlist">
        ${inWish ? "♥" : "♡"}
      </button>
      <div class="product-img-wrap">
        <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.src='https://placehold.co/400x400/f7f5f2/aaa?text=Image'" />
      </div>
      <div class="product-info">
        <span class="product-cat">${SUB_NAMES[product.sub] || product.sub} · #${product.id}</span>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">₹${product.price.toLocaleString("en-IN")} <span>₹${product.mrp.toLocaleString("en-IN")}</span></div>
        ${discountTag}
        ${sizeHTML}
      </div>
      <div class="product-actions">
        <button class="btn-add-cart" data-id="${product.id}">🛒 Add</button>
        <button class="btn-buy-now" data-id="${product.id}">⚡ Buy</button>
      </div>
    `;

    /* Attach events */
    /* Wishlist */
    card.querySelector(".btn-wish").addEventListener("click", () => toggleWishlist(product.id, card));

    /* Size select */
    card.querySelectorAll(".size-opt").forEach(btn => {
      btn.addEventListener("click", () => {
        card.querySelectorAll(".size-opt").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });

    /* Add to cart */
    card.querySelector(".btn-add-cart").addEventListener("click", () => {
      const size = getSelectedSize(card, sizeConf);
      if (size === null) { showToast("Please select a size first!", "⚠️"); return; }
      addToCart(product, size);
      flashCartBtn(card.querySelector(".btn-add-cart"));
    });

    /* Buy Now */
    card.querySelector(".btn-buy-now").addEventListener("click", () => {
      const size = getSelectedSize(card, sizeConf);
      if (size === null) { showToast("Please select a size first!", "⚠️"); return; }
      openCheckoutSingle(product, size);
    });

    return card;
  }

  /** Reads selected size from a card; returns size string or "" for no-size items; null if required but unselected */
  function getSelectedSize(card, sizeConf) {
    if (sizeConf.type === "none") return "";
    const sel = card.querySelector(".size-opt.selected");
    if (!sel) return null;
    return sel.dataset.size;
  }

  /** Render products into a grid element */
  function renderGrid(gridEl, products) {
    gridEl.innerHTML = "";
    if (!products.length) {
      gridEl.innerHTML = `<p style="color:var(--clr-ink-soft);font-size:14px;grid-column:1/-1">No products found.</p>`;
      return;
    }
    products.forEach(p => gridEl.appendChild(buildCard(p)));
  }

  /** Render all three collection grids */
  function renderAll() {
    const men    = PRODUCTS.filter(p => p.section === "men");
    const ladies = PRODUCTS.filter(p => p.section === "ladies");
    const kids   = PRODUCTS.filter(p => p.section === "kids");

    renderGrid(document.getElementById("grid-men"),    men);
    renderGrid(document.getElementById("grid-ladies"), ladies);
    renderGrid(document.getElementById("grid-kids"),   kids);

    document.getElementById("men-count").textContent    = `${men.length} items`;
    document.getElementById("ladies-count").textContent = `${ladies.length} items`;
    document.getElementById("kids-count").textContent   = `${kids.length} items`;
  }

  /* Flash "added" state on cart button */
  function flashCartBtn(btn) {
    btn.classList.add("added");
    btn.textContent = "✓ Added";
    setTimeout(() => {
      btn.classList.remove("added");
      btn.textContent = "🛒 Add";
    }, 1800);
  }

  /* ================================================================
     4. CART LOGIC
  ================================================================ */

  /**
   * Cart item shape: { cartId, productId, name, price, img, section, sub, size, qty }
   */
  function generateCartId(productId, size) {
    return `${productId}_${size || "ns"}`;
  }

  function addToCart(product, size) {
    const cartId = generateCartId(product.id, size);
    const existing = cart.find(i => i.cartId === cartId);
    if (existing) {
      existing.qty += 1;
      showToast(`${product.name} qty updated!`, "✅");
    } else {
      cart.push({
        cartId, productId: product.id,
        name: product.name, price: product.price,
        img: product.img, section: product.section, sub: product.sub,
        size, qty: 1
      });
      showToast(`${product.name} added to cart!`, "🛒");
    }
    saveState();
    updateCartBadge();
  }

  function removeFromCart(cartId) {
    cart = cart.filter(i => i.cartId !== cartId);
    saveState();
    renderCartSidebar();
    updateCartBadge();
  }

  function changeQty(cartId, delta) {
    const item = cart.find(i => i.cartId === cartId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeFromCart(cartId);
    else {
      saveState();
      renderCartSidebar();
    }
  }

  function clearCart() {
    cart = [];
    saveState();
    renderCartSidebar();
    updateCartBadge();
  }

  function getCartTotal() {
    return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function getCartCount() {
    return cart.reduce((sum, i) => sum + i.qty, 0);
  }

  function updateCartBadge() {
    const count = getCartCount();
    const badge = document.getElementById("cart-badge");
    badge.textContent = count;
    badge.classList.toggle("visible", count > 0);
  }

  function renderCartSidebar() {
    const container = document.getElementById("cart-items-container");
    const footer    = document.getElementById("cart-footer");
    container.innerHTML = "";

    if (!cart.length) {
      container.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add some products to get started!</p>
        </div>`;
      footer.style.display = "none";
      return;
    }

    cart.forEach(item => {
      const el = document.createElement("div");
      el.className = "cart-item";
      const sizeLabel = item.size ? `Size: ${item.size} · ` : "";
      el.innerHTML = `
        <img class="cart-item-img" src="${item.img}" alt="${item.name}"
          onerror="this.src='https://placehold.co/70x70/f7f5f2/aaa?text=img'" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">${sizeLabel}${SUB_NAMES[item.sub] || item.sub} · #${item.productId}</div>
          <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString("en-IN")}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" data-cartid="${item.cartId}" data-delta="-1">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" data-cartid="${item.cartId}" data-delta="1">+</button>
          </div>
        </div>
        <button class="btn-remove-item" data-cartid="${item.cartId}">✕</button>
      `;
      container.appendChild(el);
    });

    /* Qty buttons */
    container.querySelectorAll(".qty-btn").forEach(btn => {
      btn.addEventListener("click", () => changeQty(btn.dataset.cartid, parseInt(btn.dataset.delta)));
    });
    container.querySelectorAll(".btn-remove-item").forEach(btn => {
      btn.addEventListener("click", () => removeFromCart(btn.dataset.cartid));
    });

    /* Total */
    const total = getCartTotal();
    document.getElementById("cart-total").textContent = `₹${total.toLocaleString("en-IN")}`;
    footer.style.display = "flex";
  }

  /* Open / close cart sidebar */
  function openCart() {
    renderCartSidebar();
    document.getElementById("cart-sidebar").classList.add("open");
    document.getElementById("cart-overlay").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCart() {
    document.getElementById("cart-sidebar").classList.remove("open");
    document.getElementById("cart-overlay").classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ================================================================
     5. WISHLIST LOGIC
  ================================================================ */

  function toggleWishlist(productId, card) {
    const idx = wishlist.indexOf(productId);
    const btn = card.querySelector(".btn-wish");
    if (idx === -1) {
      wishlist.push(productId);
      btn.classList.add("wishlisted");
      btn.textContent = "♥";
      showToast("Added to wishlist!", "♥");
    } else {
      wishlist.splice(idx, 1);
      btn.classList.remove("wishlisted");
      btn.textContent = "♡";
      showToast("Removed from wishlist", "♡");
    }
    btn.classList.add("pulse");
    btn.addEventListener("animationend", () => btn.classList.remove("pulse"), { once: true });
    saveState();
    updateWishBadge();
  }

  function updateWishBadge() {
    const badge = document.getElementById("wish-badge");
    badge.textContent = wishlist.length;
    badge.classList.toggle("visible", wishlist.length > 0);
  }

  function openWishlist() {
    const body = document.getElementById("wishlist-body");
    const wishedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));
    body.innerHTML = "";

    if (!wishedProducts.length) {
      body.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">♡</div><h3>Nothing here yet</h3><p>Click the ♡ on any product to save it.</p></div>`;
    } else {
      const grid = document.createElement("div");
      grid.className = "wishlist-grid";
      wishedProducts.forEach(p => {
        const item = document.createElement("div");
        item.className = "wishlist-item";
        item.innerHTML = `
          <img class="wishlist-item-img" src="${p.img}" alt="${p.name}"
            onerror="this.src='https://placehold.co/200x200/f7f5f2/aaa?text=img'" />
          <div class="wishlist-item-info">
            <div class="wishlist-item-name">${p.name}</div>
            <div class="wishlist-item-price">₹${p.price.toLocaleString("en-IN")}</div>
          </div>
          <div class="wishlist-item-actions">
            <button class="wishlist-add-cart" data-id="${p.id}">🛒 Add</button>
            <button class="wishlist-remove" data-id="${p.id}">✕</button>
          </div>`;
        grid.appendChild(item);
      });

      /* Add-to-cart from wishlist (no size needed; uses default no-size) */
      grid.querySelectorAll(".wishlist-add-cart").forEach(btn => {
        btn.addEventListener("click", () => {
          const p = PRODUCTS.find(x => x.id == btn.dataset.id);
          if (!p) return;
          const conf = SIZE_CONFIG[p.sub] || { type: "none" };
          if (conf.type !== "none") {
            showToast("Open product to select a size first!", "⚠️");
            closeModal("wishlist-overlay");
            return;
          }
          addToCart(p, "");
        });
      });

      /* Remove from wishlist */
      grid.querySelectorAll(".wishlist-remove").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = parseInt(btn.dataset.id);
          const idx = wishlist.indexOf(id);
          if (idx !== -1) wishlist.splice(idx, 1);
          saveState();
          updateWishBadge();
          /* Refresh all wish buttons on page */
          document.querySelectorAll(`.btn-wish[data-id="${id}"]`).forEach(b => {
            b.classList.remove("wishlisted");
            b.textContent = "♡";
          });
          openWishlist(); /* re-render */
        });
      });

      body.appendChild(grid);
    }

    document.getElementById("wishlist-overlay").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  /* ================================================================
     6. CHECKOUT LOGIC
  ================================================================ */

  /** Open checkout with entire cart */
  function openCheckoutCart() {
    checkoutSingleProduct = null;
    buildCheckoutSummary(cart);
    openCheckoutModal();
  }

  /** Open checkout for single product (Buy Now) */
  function openCheckoutSingle(product, size) {
    checkoutSingleProduct = { product, size };
    const fakeCartItems = [{
      cartId: "single",
      productId: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      section: product.section,
      sub: product.sub,
      size,
      qty: 1
    }];
    buildCheckoutSummary(fakeCartItems);
    openCheckoutModal();
  }

  function buildCheckoutSummary(items) {
    const listEl = document.getElementById("checkout-items-list");
    listEl.innerHTML = "";
    let total = 0;
    items.forEach(item => {
      const line = document.createElement("div");
      line.className = "checkout-item-line";
      const sizeLabel = item.size ? ` (Size ${item.size})` : "";
      line.innerHTML = `
        <span>#${item.productId} ${item.name}${sizeLabel} ×${item.qty}</span>
        <span>₹${(item.price * item.qty).toLocaleString("en-IN")}</span>`;
      listEl.appendChild(line);
      total += item.price * item.qty;
    });
    document.getElementById("checkout-total-display").textContent = `₹${total.toLocaleString("en-IN")}`;
  }

  function openCheckoutModal() {
    /* Clear previous form errors */
    ["cust-name","cust-phone","cust-address"].forEach(id => {
      const el = document.getElementById(id);
      el.classList.remove("error");
    });
    closeCart();
    document.getElementById("checkout-overlay").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function placeOrder() {
    const name    = document.getElementById("cust-name").value.trim();
    const phone   = document.getElementById("cust-phone").value.trim();
    const address = document.getElementById("cust-address").value.trim();

    /* Validation */
    let valid = true;
    [["cust-name", name], ["cust-phone", phone], ["cust-address", address]].forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (!val) { el.classList.add("error"); valid = false; }
      else el.classList.remove("error");
    });
    if (!valid) { showToast("Please fill all required fields.", "⚠️"); return; }

    const phoneRx = /^[6-9]\d{9}$/;
    if (!phoneRx.test(phone)) {
      document.getElementById("cust-phone").classList.add("error");
      showToast("Enter a valid 10-digit Indian mobile number.", "⚠️");
      return;
    }

    /* Build items for message */
    const items = checkoutSingleProduct
      ? [{
          cartId: "single",
          productId: checkoutSingleProduct.product.id,
          name: checkoutSingleProduct.product.name,
          price: checkoutSingleProduct.product.price,
          img: checkoutSingleProduct.product.img,
          section: checkoutSingleProduct.product.section,
          sub: checkoutSingleProduct.product.sub,
          size: checkoutSingleProduct.size,
          qty: 1
        }]
      : [...cart];

    const total = items.reduce((s, i) => s + i.price * i.qty, 0);

    /* Build WhatsApp message */
    let msg = `🛍️ *New Order — Modern Mart*\n`;
    msg += `━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *Customer:* ${name}\n`;
    msg += `📞 *Phone:* ${phone}\n`;
    msg += `📍 *Address:* ${address}\n`;
    msg += `━━━━━━━━━━━━━━━━━━\n`;
    msg += `🛒 *Order Items:*\n`;
    items.forEach((item, i) => {
      const sizeLabel = item.size ? ` | Size: ${item.size}` : "";
      const sectionLabel = item.section.charAt(0).toUpperCase() + item.section.slice(1);
      msg += `${i+1}. #${item.productId} — ${item.name}\n`;
      msg += `   Category: ${sectionLabel}'s / ${SUB_NAMES[item.sub]}${sizeLabel}\n`;
      msg += `   Qty: ${item.qty} × ₹${item.price.toLocaleString("en-IN")} = ₹${(item.price*item.qty).toLocaleString("en-IN")}\n`;
    });
    msg += `━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 *Total: ₹${total.toLocaleString("en-IN")}*\n`;
    msg += `\nPlease confirm my order. Thank you! 🙏`;

    const encoded = encodeURIComponent(msg);
    const waURL = `https://wa.me/${SHOP_WA_NUMBER}?text=${encoded}`;

    window.open(waURL, "_blank");

    /* Clear cart if it was a cart checkout */
    if (!checkoutSingleProduct) clearCart();

    closeModal("checkout-overlay");
    showToast("Order sent via WhatsApp! 🎉", "✅");

    /* Reset form */
    document.getElementById("cust-name").value = "";
    document.getElementById("cust-phone").value = "";
    document.getElementById("cust-address").value = "";
  }

  /* ================================================================
     7. SEARCH LOGIC
  ================================================================ */
  function handleSearch(query) {
    const q = query.trim().toLowerCase();
    const section = document.getElementById("search-results-section");
    const grid    = document.getElementById("search-results-grid");
    const title   = document.getElementById("search-results-title");

    if (!q) {
      section.classList.remove("visible");
      return;
    }

    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.sub.toLowerCase().includes(q) ||
      p.section.toLowerCase().includes(q) ||
      String(p.id).includes(q) ||
      (SUB_NAMES[p.sub] || "").toLowerCase().includes(q)
    );

    title.textContent = results.length
      ? `"${query}" — ${results.length} result${results.length !== 1 ? "s" : ""}`
      : `No results for "${query}"`;
    renderGrid(grid, results);
    section.classList.add("visible");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ================================================================
     8. UI INTERACTIONS
  ================================================================ */

  /* ── Modal helpers ── */
  function closeModal(overlayId) {
    document.getElementById(overlayId).classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ── Sub-tabs (filter by sub-category within a section) ── */
  function initSubTabs() {
    document.querySelectorAll(".sub-tabs").forEach(tabGroup => {
      const sectionKey = tabGroup.dataset.section;
      const gridId = `grid-${sectionKey}`;
      const gridEl = document.getElementById(gridId);

      tabGroup.querySelectorAll(".sub-tab").forEach(tab => {
        tab.addEventListener("click", () => {
          tabGroup.querySelectorAll(".sub-tab").forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          const sub = tab.dataset.sub;
          const filtered = sub === "all"
            ? PRODUCTS.filter(p => p.section === sectionKey)
            : PRODUCTS.filter(p => p.section === sectionKey && p.sub === sub);
          renderGrid(gridEl, filtered);
        });
      });
    });
  }

  /* ── Category nav pills ── */
  function initCatNav() {
    document.querySelectorAll(".cat-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");

        const sec = pill.dataset.section;
        const sub = pill.dataset.sub;

        if (sec === "all") {
          document.getElementById("men").style.display    = "";
          document.getElementById("ladies").style.display = "";
          document.getElementById("kids").style.display   = "";
        } else if (sec) {
          ["men","ladies","kids"].forEach(s => {
            document.getElementById(s).style.display = s === sec ? "" : "none";
          });
          document.getElementById(sec).scrollIntoView({ behavior: "smooth" });
        } else if (sub) {
          /* Sub-category pill: show all sections but scroll to relevant one */
          ["men","ladies","kids"].forEach(s => document.getElementById(s).style.display = "");

          /* Activate the right sub-tab */
          document.querySelectorAll(`.sub-tab[data-sub="${sub}"]`).forEach(tab => {
            tab.dispatchEvent(new Event("click"));
            tab.closest("section")?.scrollIntoView({ behavior: "smooth" });
          });
        }
      });
    });
  }

  /* ── Back to top button ── */
  function initBackToTop() {
    const btn = document.getElementById("btn-back-top");
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 400);
    });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ── Cart open/close ── */
  function initCartUI() {
    document.getElementById("btn-open-cart").addEventListener("click", openCart);
    document.getElementById("btn-close-cart").addEventListener("click", closeCart);
    document.getElementById("cart-overlay").addEventListener("click", closeCart);
    document.getElementById("btn-checkout").addEventListener("click", openCheckoutCart);
    document.getElementById("btn-clear-cart").addEventListener("click", () => {
      if (confirm("Clear your entire cart?")) clearCart();
    });
  }

  /* ── Wishlist open/close ── */
  function initWishlistUI() {
    document.getElementById("btn-open-wishlist").addEventListener("click", openWishlist);
    document.getElementById("btn-close-wishlist").addEventListener("click", () => closeModal("wishlist-overlay"));
    document.getElementById("wishlist-overlay").addEventListener("click", e => {
      if (e.target === document.getElementById("wishlist-overlay")) closeModal("wishlist-overlay");
    });
  }

  /* ── Checkout modal close ── */
  function initCheckoutUI() {
    document.getElementById("btn-close-checkout").addEventListener("click", () => closeModal("checkout-overlay"));
    document.getElementById("checkout-overlay").addEventListener("click", e => {
      if (e.target === document.getElementById("checkout-overlay")) closeModal("checkout-overlay");
    });
    document.getElementById("btn-place-order").addEventListener("click", placeOrder);
  }

  /* ── Search ── */
  function initSearch() {
    const input = document.getElementById("search-input");
    let debounceTimer;
    input.addEventListener("input", e => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => handleSearch(e.target.value), 250);
    });
  }

  /* ================================================================
     TOAST HELPER
  ================================================================ */
  function showToast(msg, icon = "ℹ️") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-icon">${icon}</span> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("out");
      toast.addEventListener("animationend", () => toast.remove());
    }, 3000);
  }

  /* ================================================================
     9. INIT
  ================================================================ */
  function init() {
    loadState();
    renderAll();
    initSubTabs();
    initCatNav();
    initCartUI();
    initWishlistUI();
    initCheckoutUI();
    initSearch();
    initBackToTop();
    updateCartBadge();
    updateWishBadge();
  }

  document.addEventListener("DOMContentLoaded", init);
  