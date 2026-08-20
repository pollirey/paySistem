
const buttons = document.querySelectorAll('.product-button');

buttons.forEach(button => {
    button.addEventListener('click' , () => {
        const product = button.closest(".product");
        const name = product.dataset.name;
        const price = product.dataset.price;

        console.log(`Товар ${name}`);
        console.log(`Цена ${price}`);
    })
}) 