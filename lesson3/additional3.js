// 1. Створити пустий масив та :
let array1 = [];

//     a. заповнити його 50 парними числами за допомоги циклу.  четные?
let count = 50;
for (let i = 0; i < count; i++) {
    array1[i] = (i + 1) * 2;
}
console.log(array1.join(', '));

//     b. заповнити його 50 непарними числами за допомоги циклу.  нечетные?
array1 = [];
for (let i = 0; i < count; i++) {
    array1[i] = (i + 1) * 2 - 1;
}
console.log(array1.join(', '));

//     c. Заповнити масив 20ма random числами. (Google: Generate random number JS)
array1 = [];
count = 20;
for (let i = 0; i < count; i++) {
    array1[i] = Math.random();
}
console.log(array1.join(', '));

//     d. Заповнити масив 20ма random числами в діапазоні від 8 до 732 (Google: Generate random number JS)
function getRandomInt(startRange, endRange) {
    return Math.floor(Math.random() * (endRange - startRange) + startRange);
}

array1 = [];
for (let i = 0; i < count; i++) {
    array1[i] = getRandomInt(8, 732);
}
console.log(array1.join(', '));
console.log('____________');

// 2. Вивести за допомогою console.log кожен третій елемент
let n = 3;
for (let i = n - 1; i < array1.length; i += n) {
    console.log(array1[i]);
}
console.log('____________');

// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
for (let i = n - 1; i < array1.length; i += n) {
    if ((array1[i] % 2) === 0) {
        console.log(array1[i]);
    }
}
console.log('____________');

// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
let newArray = [];
let newItem = 0;
for (let i = n - 1; i < array1.length; i += n) {
    if ((array1[i] % 2) === 0) {
        console.log(array1[i]);
        newArray[newItem++] = array1[i];
    }
}
console.log(newArray.join(', '));
console.log('____________');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
for (let i = 1; i < array1.length; i++) {
    if ((array1[i] % 2) === 0) {
        console.log(array1[i - 1]);
    }
}
console.log('____________');

// 6. Є масив з числами 100,250,50,168,120,345,188, Які характеризують вартість окремої покупки. Обрахувати середній чек.
let purchaseAmounts = [100, 250, 50, 168, 120, 345, 188];
let totalAmount = 0;
for (const amount of purchaseAmounts) {
    totalAmount += amount;
}
console.log(`Суми покупок ` + purchaseAmounts.join(', '));
console.log(`Середній чек ` + (totalAmount / purchaseAmounts.length));
console.log('____________');

// 7. Створити масив з random значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
array1 = [];
let array2 = [];
for (let i = 0; i < count; i++) {
    array1[i] = getRandomInt(1, 101);
    array2[i] = array1[i] * 5;
}
console.log(array1.join(', '));
console.log(array2.join(', '));
console.log('____________');

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
array1 = [true, 11, 'prof', {}, 'of', 60, 'year', 2021, false];
array2 = [];
for (const item of array1) {
    if (typeof item === "number") {
        array2[array2.length] = item;
    }
}
console.log(array2.join(', '));
console.log('____________');

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'Василь', age: 31, status: false},
    {id: 2, name: 'Петро', age: 30, status: true},
    {id: 3, name: 'Микола', age: 29, status: true},
    {id: 4, name: 'Ольга', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив usersWithCities
let usersWithCities = [];
for (const itemUser of usersWithId) {
    // mapping id and user_id
    let idSite = 0;
    while (idSite < citiesWithId.length) {  // optimized with break
        if (itemUser.id === citiesWithId[idSite].user_id) {
            let newObject = {};
            let newProperty = 'address';
            // newObject = Object.assign({}, itemUser, citiesWithId[idSite]);
            for (const userObjectKey in itemUser) {
                newObject[userObjectKey] = itemUser[userObjectKey];
            }
            newObject[newProperty] = {};
            for (const siteObjectKey in citiesWithId[idSite]) {
                newObject[newProperty][siteObjectKey] = citiesWithId[idSite][siteObjectKey];
            }
            // console.log(newObject);
            usersWithCities[usersWithCities.length] = newObject;
            break;
        }
        idSite++;
    }
}
console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrNumbers = [];
for (let i = 0; i < 10; i++) {
    arrNumbers[i] = getRandomInt(0, 50);
}
console.log(`масив чисел ` + arrNumbers.join(', '));
for (const item of arrNumbers) {
    if ((item % 2) === 0)
        console.log(`${item}`);
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// вже є arrNumbers
let newNumbers = [];
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
for (let i = 0; i < arrNumbers.length; i++) {
    newNumbers[i] = arrNumbers[i];
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrChars = [ 'a', 'b', 'c'];
let myString = '';
for (let i = 0; i < arrChars.length; i++) {
    myString = myString + arrChars[i];
}
console.log(myString);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
myString = '';
let id = 0;
while (id < arrChars.length) {
    myString = myString + arrChars[id];
    id++;
}
console.log(myString);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
myString = '';
for (const char of arrChars) {
    myString = myString + char;
}
console.log(myString);

