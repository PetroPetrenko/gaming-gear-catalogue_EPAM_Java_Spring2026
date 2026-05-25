const searchInput = document.getElementById('searchInput');
const productGrid = document.getElementById('productGrid');
const cards = document.querySelectorAll('.product-card');
const sortSelect = document.getElementById('sortSelect');
const themeToggle = document.getElementById('themeToggle');

searchInput.addEventListener('input', () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();

        if (name.includes(value)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

});

sortSelect.addEventListener('change', () => {

    const products = Array.from(cards);

    if (sortSelect.value === 'low') {
        products.sort((a, b) => a.dataset.price - b.dataset.price);
    }

    if (sortSelect.value === 'high') {
        products.sort((a, b) => b.dataset.price - a.dataset.price);
    }

    productGrid.innerHTML = '';

    products.forEach(product => {
        productGrid.appendChild(product);
    });

});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

const buttons = document.querySelectorAll('.buy-btn');

buttons.forEach(button => {

    button.addEventListener('click', () => {
        button.innerText = 'Added ✓';
        button.style.background = 'green';
    });

});
