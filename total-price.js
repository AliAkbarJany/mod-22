const products = [
    { name: 'laptop', price: 34000 },
    { name: 'watch', price: 300 },
    { name: 'shirt', price: 500 },
    { name: 'phone', price: 12000 }

];

let totalPrice = 0;
for (let i = 0; i < products.length; i++) {
    let product = products[i];
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);

const carts = [
    { name: 'laptop', price: 34000, quantity: 1 },
    { name: 'watch', price: 300, quantity: 5 },
    { name: 'shirt', price: 500, quantity: 4 },
    { name: 'phone', price: 12000, quantity: 2 }

];
let cartTotal = 0;
for (let i = 0; i < carts.length; i++) {
    let product = carts[i];
    // console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;

}
// console.log(cartTotal);
let sum = 0;
for (var i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum);