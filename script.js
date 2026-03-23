// Datos de productos de ejemplo con imágenes de Unsplash
const products = [
    {
        id: 1,
        title: "Auriculares Alpha Noise",
        category: "Audio",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Reloj Inteligente Chronos",
        category: "Accesorios",
        price: 199.50,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Cámara DSLR Pro 4K",
        category: "Fotografía",
        price: 899.00,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Altavoz Bluetooth Bass",
        category: "Audio",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "Teclado Mecánico Neo",
        category: "Computación",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        title: "Gafas de Sol Óptica",
        category: "Moda",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281501f?auto=format&fit=crop&q=80&w=800"
    }
];

// Estado del carrito
let cartCount = 0;

// Renderizar productos en el DOM
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        // Añadir animación escalonada (cascade effect)
        productCard.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s backwards`;
        
        productCard.innerHTML = `
            <div class="img-container">
                <img src="${product.image}" loading="lazy" alt="${product.title}" class="product-img">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(this)">Añadir al carrito</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Lógica de añadir al carrito
function addToCart(button) {
    cartCount++;
    const cartCountEl = document.getElementById('cart-count');
    cartCountEl.textContent = cartCount;
    
    // Animación del badge del carrito
    cartCountEl.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartCountEl.style.transform = 'scale(1)';
    }, 300);
    
    // Animación y feedback del botón
    const originalText = button.textContent;
    button.textContent = '¡Añadido!';
    button.style.backgroundColor = '#10b981'; // Green color
    button.style.color = 'white';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
        button.style.color = '';
    }, 1500);
    
    // Animación sutil del icono del carrito
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// Efecto de sombra para la barra de navegación en scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
        navbar.style.background = 'rgba(255, 255, 255, 0.85)';
    }
});

// Inicializar la tienda cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
