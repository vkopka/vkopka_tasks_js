const writeLine = () => {
    console.log('==============================');
};

// - Дано натуральне число n. Виведіть усі числа від 1 до n.
let n = 15;

const viewNumbers = (startNumber, maxNumber) => {
    console.log(startNumber);
    if (startNumber === maxNumber) {
        return;
    }
    viewNumbers(++startNumber, maxNumber);
};

viewNumbers(1, n);
writeLine();

// - Дано два цілих числа A і В. Виведіть усі числа від A до B включно, в порядку зростання,
// якщо A < B, або в порядку зменшення в іншому випадку.
let a = 22;
let b = 11;

const viewAnyNumbers = (startNumber, maxNumber) => {
    console.log(startNumber);
    if (startNumber === maxNumber) {
        return;
    }
    viewAnyNumbers((startNumber < maxNumber) ? ++startNumber : --startNumber, maxNumber);
};

viewAnyNumbers(a, b);
writeLine();

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let myArray = [2, 7, 4, 3, 9];
let i = 2;

const moveElementInArray = (array, num) => {
    if (Array.isArray(array) && (num < array.length - 1) && (num >= 0)) {
        let element = array[num];
        array[num] = array[num + 1];
        array[num + 1] = element;
    }
};

console.log(myArray.join(', '));
moveElementInArray(myArray, i);
console.log(myArray.join(', '));
writeLine();

// - Створити функцію яка буде переносити елементи з значенням 0 у кінець масиву.
// Зберігаючи при цьому порядок не нульових значень.
// Довжина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let myValue = 0;
let myArray1 = [0, 7, 0, 4, 3, 0];

const moveElementsInArray = (fArray, aValue) => {
    if (Array.isArray(fArray)) {
        for (let i = 0; i < fArray.length; i++) {
            if (fArray[i] === aValue) {
                for (let j = i; j < fArray.length - 1; j++) {
                    fArray[j] = fArray[j + 1];
                }
                fArray[fArray.length - 1] = aValue;
            }
        }
    }
}

console.log(myArray1.join(', '));
moveElementsInArray(myArray1, myValue);
console.log(myArray1.join(', '));
