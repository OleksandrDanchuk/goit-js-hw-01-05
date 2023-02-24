// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];
// }

// function splitMessage(message, delimiter) {
//   let words;
//   return message.split(delimiter);
//   return words;
// }

// function calculateEngravingPrice(message, pricePerWord) {
//   return message.split(' ').length * pricePerWord;
// }

// function makeStringFromArray(array, delimiter) {
//   let string;
//   return array.join(delimiter);
//   return string;
// }

// function slugify(title) {
//   return title.toLowerCase().split(` `).join(`-`);
// }

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   return newArray;
// }
// ----OR----
// function makeArray(firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
//   return newArray;
// }

// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   console.log(sum);
//   return sum;
// }
// calculateTotal(7);

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА
// function findLongestWord(string) {
//   const newArray = string.split(' ');
//   let longestWord = '';
//   for (const word of newArray) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// Доповни код функції таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i < max; i += 1) {
//     numbers.push[i];
//   }
//   // Change code above this line
//   return numbers;
// }

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і повертає но
// вий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value
// function filterArray(numbers, value) {
//   let bigNumbers = [];
//   for (number of numbers) {
//     if (number > value) {
//       bigNumbers.push(number);
//     }
//   }
//   return bigNumbers;
// }

// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   return fruits.includes(fruit);
// }

// Напиши функцію, яка отримує два масиви довільної довжини, і повертає новий масив,
// що складається з тих елементів, які присутні в обох вихідних масивах.
// function getCommonElements(array1, array2) {
//   let newArray = [];
//   for (const string of array1) {
//     if (array1.includes(string) && array2.includes(string)) {
//       newArray.push(string);
//     }
//   }
//   return newArray;
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const sum of order) {
//     total += sum;
//   }
//   return total;
// }

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// операція за модулем (%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника.
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// Напиши функцію, яка повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).
// function getEvenNumbers(start, end) {
//   const newArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   return newArray;
// }

// Напиши функцію, яка перевіряє, чи присутнє в масиві array значення value,
// повертаючи true, якщо присутнє, і false в іншому випадку.
// function includes(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
// }
