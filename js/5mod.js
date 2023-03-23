// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
// };
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
// };

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };
// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;
// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }