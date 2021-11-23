// "use strict";
//  debugger;

let myNumberA = 33;
let myNumberB = 6;
let myNumberC = 22;
let arrayOfNumbers = [33, 6, 22, 69];

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNumber = (n1, n2, n3) => {
    let minValue = n1;
    if (n2 < minValue) {
        minValue = n2;
    }
    if (n3 < minValue) {
        minValue = n3;
    }
    return minValue;
};

console.log(minNumber(myNumberA, myNumberB, myNumberC));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumber = (n1, n2, n3) => {
    let maxValue = n1;
    if (n2 > maxValue) {
        maxValue = n2;
    }
    if (n3 > maxValue) {
        maxValue = n3;
    }
    return maxValue;
};

console.log(maxNumber(myNumberA, myNumberB, myNumberC));

// - створити функцію яка повертає найбільше число з масиву
let maxNumberArray = (arrayNumbers) => {
    let maxValue = arrayNumbers[0];
    for (const arrayNumbersElement of arrayNumbers) {
        if (arrayNumbersElement > maxValue) {
            maxValue = arrayNumbersElement;
        }
    }
    return maxValue;
};

console.log(maxNumberArray(arrayOfNumbers));

// - створити функцію яка повертає найменьше число з масиву
let minNumberArray = (arrayNumbers) => {
    let minValue = arrayNumbers[0];
    for (const arrayNumbersElement of arrayNumbers) {
        if (arrayNumbersElement < minValue) {
            minValue = arrayNumbersElement;
        }
    }
    return minValue;
};

console.log(minNumberArray(arrayOfNumbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumArrayNumbers = (arrayNumbers) => {
    let sumValue = 0;
    for (const arrayNumbersElement of arrayNumbers) {
        sumValue += arrayNumbersElement;
    }
    return sumValue;
};

console.log(sumArrayNumbers(arrayOfNumbers));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let averageArrayNumbers = (arrayNumbers) => {
    let avgValue = 0;
    for (const arrayNumbersElement of arrayNumbers) {
        avgValue += arrayNumbersElement;
    }
    return avgValue / arrayNumbers.length;
};

console.log(averageArrayNumbers(arrayOfNumbers));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
let curiousArrayNumbers = (...arguments) => {
    let minValue = arguments[0];
    let maxValue = arguments[0];
    for (const argument of arguments) {
        if (argument < minValue) {
            minValue = argument;
        }
        if (argument > maxValue) {
            maxValue = argument;
        }
    }
    console.log(maxValue);
    return minValue;
};

console.log(curiousArrayNumbers(myNumberA, myNumberB, myNumberC));

// - створити функцію яка заповнює масив випадковими числами
// (цей код генерує випадкові числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.
let viewArrayNumbers = (countNumbers) => {
    let myArray = [];
    for (let i = 0; i < countNumbers; i++) {
        myArray[i] = Math.round(Math.random() * 100);
    }
    console.log(myArray.join(', '));
};

viewArrayNumbers(myNumberB);

// - створити функцію яка заповнює масив випадковими числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
let createArrayNumbers = (countNumbers, limitNumber) => {
    let myArray = [];
    for (let i = 0; i < countNumbers; i++) {
        myArray[i] = Math.round(Math.random() * limitNumber);
    }
    return myArray;
};

console.log(createArrayNumbers(myNumberB, myNumberA).join(', '));

// - Функція приймає масив та робить з нього новий масив в зворотн'ому порядку. [1,2,3] -> [3, 2, 1].
let reverseArray = (anyArray) => {
    let newArray = [];
    for (let i = anyArray.length - 1; i >= 0; i--) {
        newArray[newArray.length] = anyArray[i];
    }
    return newArray;
}

console.log(reverseArray(arrayOfNumbers).join(', '));
