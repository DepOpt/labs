// Функція для додавання товарів до корзини
function addToCart(itemName, itemPrice) {
    // Отримуємо існуючу корзину з localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Додаємо новий товар
    cart.push({ name: itemName, price: itemPrice });

    // Зберігаємо корзину назад у localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Повідомлення користувачу
    alert(`${itemName} додано до корзини!`);
}


function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartList = document.getElementById("cart-items");

    
    cartList.innerHTML = "";

    
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - ${item.price} грн`;
        cartList.appendChild(listItem);
    });

    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("total-price").textContent = `Загальна сума: ${total} грн`;
}