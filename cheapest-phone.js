const phones = [
    { name: 'nokia', price: 2300 },
    { name: 'samsung', price: 5000 },
    { name: 'oppo', price: 1000 },
    { name: 'realme', price: 13000 }

];

let cheapest = phones[0];
for (var i = 0; i < phones.length; i++) {
    const phone = phones[i];
    // compare price only
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);
/*
console.log(phones);
console.log(phones[2]);
*/

/*console.log(phones.indexOf({ name: 'samsung', price: 5000 }));
*/

