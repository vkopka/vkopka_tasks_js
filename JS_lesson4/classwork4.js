// debugger;
// "use strict";

let myNumber1 = 33;
let myNumber2 = 6;
let myNumber3 = 22;
let arrayOfNumber = [33, 6, 22, 69];

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minimalNumber(n1, n2, n3) {
    let minValue = n1;
    if (n2 < minValue) {
        minValue = n2;
    }
    if (n3 < minValue) {
        minValue = n3;
    }
    return minValue;
}

console.log(minimalNumber(myNumber1, myNumber2, myNumber3));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maximalNumber(n1, n2, n3) {
    let maxValue = n1;
    if (n2 > maxValue) {
        maxValue = n2;
    }
    if (n3 > maxValue) {
        maxValue = n3;
    }
    return maxValue;
}

console.log(maximalNumber(myNumber1, myNumber2, myNumber3));

// - створити функцію яка повертає найбільше число з масиву
function maxNumberOfArray(arrayNumbers) {
    let maxValue = arrayNumbers[0];
    for (const arrayNumbersElement of arrayNumbers) {
        if (arrayNumbersElement > maxValue) {
            maxValue = arrayNumbersElement;
        }
    }
    return maxValue;
}

console.log(maxNumberOfArray(arrayOfNumber));

// - створити функцію яка повертає найменьше число з масиву
function minNumberOfArray(arrayNumbers) {
    let minValue = arrayNumbers[0];
    for (const arrayNumbersElement of arrayNumbers) {
        if (arrayNumbersElement < minValue) {
            minValue = arrayNumbersElement;
        }
    }
    return minValue;
}

console.log(minNumberOfArray(arrayOfNumber));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumArrayOfNumbers(arrayNumbers) {
    let sumValue = 0;
    for (const arrayNumbersElement of arrayNumbers) {
        sumValue += arrayNumbersElement;
    }
    return sumValue;
}

console.log(sumArrayOfNumbers(arrayOfNumber));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageArrayOfNumbers(arrayNumbers) {
    let avgValue = 0;
    for (const arrayNumbersElement of arrayNumbers) {
        avgValue += arrayNumbersElement;
    }
    return avgValue / arrayNumbers.length;
}

console.log(averageArrayOfNumbers(arrayOfNumber));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
function curiousArrayOfNumbers() {
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
}

console.log(curiousArrayOfNumbers(myNumber3, myNumber1, myNumber2));

// - створити функцію яка заповнює масив випадковими числами
// (цей код генерує випадкові числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.
function viewArrayOfNumbers(countNumbers) {
    let myArray = [];
    for (let i = 0; i < countNumbers; i++) {
        myArray[i] = Math.round(Math.random() * 100);
    }
    console.log(myArray.join(', '));
}

viewArrayOfNumbers(myNumber2);

// - створити функцію яка заповнює масив випадковими числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
function createArrayOfNumbers(countNumbers, limitNumber) {
    let myArray = [];
    for (let i = 0; i < countNumbers; i++) {
        myArray[i] = Math.round(Math.random() * limitNumber);
    }
    return myArray;
}

console.log(createArrayOfNumbers(myNumber2, myNumber1).join(', '));

// - Функція приймає масив та робить з нього новий масив в зворотн'ому порядку. [1,2,3] -> [3, 2, 1].
function reverseArray(anyArray) {
    let newArray = [];
    for (let i = anyArray.length - 1; i >= 0; i--) {
        newArray[newArray.length] = anyArray[i];
    }
    return newArray;
}

console.log(reverseArray(arrayOfNumber).join(', '));
