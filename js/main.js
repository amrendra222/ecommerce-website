document.addEventListener('DOMContentLoaded', function() {
    displayCategories();
    displayFeaturedProducts();
    cart.updateCartCount();
});

function displayCategories() {
    const container = document.getElementById('categories-grid');
    if (!container) return;
    
    container.innerHTML = '';
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.onclick = () => {
            window.location.href = `pages/products.html?category=${category.id}`;
        };
        categoryCard.innerHTML = `
            <div class="category-emoji">${category.emoji}</div>
            <h3>${category.name}</h3>
        `;
        container.appendChild(categoryCard);
    });
}

function displayFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    const featured = products.slice(0, 4);
    displayProducts('featured-products', featured, true);
}
