
// const buttons = document.querySelectorAll('.product-button');

// buttons.forEach(button => {
//     button.addEventListener('click' , () => {
//         const product = button.closest(".product");
//         const name = product.dataset.name;
//         const price = product.dataset.price;

//         console.log(`Товар ${name}`);
//         console.log(`Цена ${price}`);
//     })
// }) 

const buttons = document.querySelectorAll('.user');
const resultElement = document.querySelector('.result');

buttons.forEach(button => {
    button.addEventListener('click' , () => {
        const id = button.dataset.id;
        const name = button.textContent;

        console.log(`Выбран пользователь с ID: ${id}`);
        console.log(`Имя: ${name}`);
        resultElement.textContent = `Выбран пользователь: ${name} (ID: ${id})`;
    });
});