document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is loaded and ready!');

    let cart = [];

    // Add event listener to all menu items
    const menuItems = document.querySelectorAll('.detail-box');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.querySelector('h3').textContent;
            const itemPrice = item.querySelector('strong').nextSibling.textContent.trim();

            cart.push({ name: itemName, price: itemPrice });
            alert(`${itemName} has been added to your cart!`);
            updateCartDisplay();
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav  mx-auto');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Display cart items
    const cartSection = document.createElement('section');
    cartSection.id = 'cart';
    cartSection.className = 'tm-cart-section';
    document.body.appendChild(cartSection);

    const cartContent = document.createElement('div');
    cartContent.className = 'tm-content';
    cartSection.appendChild(cartContent);

    const cartTitle = document.createElement('h2');
    cartTitle.textContent = 'Your Cart';
    cartContent.appendChild(cartTitle);

    const cartList = document.createElement('ul');
    cartContent.appendChild(cartList);

    function updateCartDisplay() {
        cartList.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - ${item.price}`;
            
            const buyButton = document.createElement('button');
            buyButton.textContent = 'Buy';
            buyButton.addEventListener('click', () => {
                window.location.href = 'checkout.html'; // Redirect to choose order type page
            });

            cartItem.appendChild(buyButton);
            cartList.appendChild(cartItem);
        });
    }
});
