// const productName = 'Droid';
// const pricePerItem = 2000;
// console.log(productName);
// console.log(pricePerItem);

// let productName = 'Droid';
// let pricePerItem = 2000;
// pricePerItem = 3500;
// console.log(pricePerItem);
// productName = 'Repair droid';
// console.log(productName);

// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;

// const productName = 'Droid';
// const pricePerItem = 3500;
// const message = 'You picked Droid, price per item is 3500 credits';
// console.log(message);

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
//   return a + b + c;
// }
// add(2, 5, 8);
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// }

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// };

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }

// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password === 'jqueryismyjam';
//   return isMatch;
// }

// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered < available)
//     message = `Order is processed, our manager will contact you.`;
//   else message = `Not enough goods in stock!`;
//   return message;
// }

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (customerCredits < totalPrice) message = `Insufficient funds!`;
//   else
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) message = `There are no products in the order!`;
//   else if (ordered > available)
//     message = `Your order is too large, there are not enough items in stock!`;
//   else message = `The order is accepted, our manager will contact you`;
//   return message;
// }
