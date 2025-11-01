const products = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, category: 'electronics', emoji: '🎧', description: 'Premium quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.' },
    { id: 2, name: 'Smart Watch', price: 199.99, category: 'electronics', emoji: '⌚', description: 'Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.' },
    { id: 3, name: 'Laptop Stand', price: 49.99, category: 'electronics', emoji: '💻', description: 'Ergonomic aluminum laptop stand with adjustable height. Improves posture and helps prevent neck strain.' },
    { id: 4, name: 'Wireless Mouse', price: 29.99, category: 'electronics', emoji: '🖱️', description: 'Precision wireless mouse with long battery life and ergonomic design. Compatible with all operating systems.' },
    { id: 5, name: 'USB-C Cable', price: 19.99, category: 'accessories', emoji: '🔌', description: 'Fast charging USB-C cable with data transfer capability. Durable braided design with 6-foot length.' },
    { id: 6, name: 'Phone Case', price: 24.99, category: 'accessories', emoji: '📱', description: 'Protective phone case with shock absorption and raised edges. Available in multiple colors and designs.' },
    { id: 7, name: 'Tablet', price: 299.99, category: 'electronics', emoji: '📱', description: '10-inch tablet with high-resolution display and powerful processor. Great for work and entertainment.' },
    { id: 8, name: 'Bluetooth Speaker', price: 59.99, category: 'electronics', emoji: '🔊', description: 'Portable Bluetooth speaker with rich bass and clear sound. Waterproof design perfect for outdoor use.' },
    { id: 9, name: 'Cotton T-Shirt', price: 24.99, category: 'clothing', emoji: '👕', description: 'Soft cotton t-shirt with comfortable fit. Available in various colors and sizes. Machine washable.' },
    { id: 10, name: 'Jeans', price: 59.99, category: 'clothing', emoji: '👖', description: 'Classic fit jeans made from premium denim. Durable and stylish for everyday wear.' },
    { id: 11, name: 'Hoodie', price: 44.99, category: 'clothing', emoji: '🧥', description: 'Cozy hoodie with front pocket and adjustable drawstring. Perfect for casual wear and cool weather.' },
    { id: 12, name: 'Running Shoes', price: 79.99, category: 'clothing', emoji: '👟', description: 'Comfortable running shoes with cushioned sole and breathable material. Great for jogging and workouts.' },
    { id: 13, name: 'Backpack', price: 39.99, category: 'accessories', emoji: '🎒', description: 'Spacious backpack with multiple compartments and laptop sleeve. Durable material with padded straps.' },
    { id: 14, name: 'Wallet', price: 29.99, category: 'accessories', emoji: '👛', description: 'Slim leather wallet with RFID blocking technology. Multiple card slots and cash compartment.' },
    { id: 15, name: 'Sunglasses', price: 34.99, category: 'accessories', emoji: '🕶️', description: 'Stylish sunglasses with UV protection. Lightweight frame and polarized lenses for eye protection.' },
    { id: 16, name: 'Laptop Bag', price: 54.99, category: 'accessories', emoji: '💼', description: 'Professional laptop bag with dedicated laptop compartment and organizer pockets. Sleek business design.' }
];

const categories = [
    { id: 'all', name: 'All Products', emoji: '🛍️' },
    { id: 'electronics', name: 'Electronics', emoji: '📱' },
    { id: 'clothing', name: 'Clothing', emoji: '👕' },
    { id: 'accessories', name: 'Accessories', emoji: '🎒' }
];

function getProductsByCategory(categoryId) {
    if (categoryId === 'all') {
        return products;
    }
    return products.filter(product => product.category === categoryId);
}

function createProductCard(product, showDetails = false) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    if (showDetails) {
        card.style.cursor = 'pointer';
        const currentPath = window.location.pathname;
        const detailsPath = currentPath.includes('pages/') ? `product-details.html?id=${product.id}` : `pages/product-details.html?id=${product.id}`;
        card.onclick = () => {
            window.location.href = detailsPath;
        };
    }
    
    card.innerHTML = `
        <div class="product-image">${product.emoji}</div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            ${showDetails ? '' : `<button class="add-to-cart" onclick="event.stopPropagation(); addProductToCart(${product.id})">Add to Cart</button>`}
        </div>
    `;
    return card;
}

function displayProducts(containerId, productList = products, clickable = true) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    if (productList.length === 0) {
        container.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
        return;
    }
    
    productList.forEach(product => {
        const card = createProductCard(product, clickable);
        container.appendChild(card);
    });
}

function filterProductsByPrice(productList, minPrice, maxPrice) {
    if (!minPrice && !maxPrice) {
        return productList;
    }
    
    return productList.filter(product => {
        if (minPrice && product.price < minPrice) return false;
        if (maxPrice && product.price > maxPrice) return false;
        return true;
    });
}

function addProductToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.addItem(product);
    }
}
