// debugger;
// "use strict";

let isArray = function (subj) {
    return (!!subj) && (subj.constructor === Array);
};

let isLiteralObject = function (subj) {
    return (!!subj) && (subj.constructor === Object);
};

// - створити функцію, яка якщо приймає один аргумент, просто виводить його,
// якщо два аргументи - складає або конкатенує їх між собою.
function strangeActivity() {
    let resultActivity = undefined;
    if (arguments.length < 1 || arguments.length > 2) {
        console.log('wrong number of arguments');
    } else {
        if (arguments.length === 1) {
            resultActivity = arguments[0];
        } else {
            resultActivity = arguments[0] + arguments[1];
        }
    }
    return resultActivity;
}

strangeActivity();
strangeActivity(1, 2, 3);
console.log(strangeActivity('get', 'info'));
console.log(strangeActivity(25, 11));
console.log(strangeActivity('+', '-'));

// - створити функцію  яка приймає два масиви та складає значення елементів
// з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
let array1 = [5, 1, 4, 9, 0];
let array2 = [3, 2, 4, 0, 5];

function sumsArrayElements(inArray1, inArray2) {
    let outArray = [];
    for (let i = 0; i < inArray1.length; i++) {
        outArray[i] = inArray1[i] + inArray2[i];
    }
    return outArray;
}

console.log(sumsArrayElements(array1, array2).join(', '));

// - Створити функцію яка приймає масив будь яких об'ектів, та повертає масив ключів всіх об'єктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let myArrayObjects = [
    {
        id: 1,
        name: 'Stitch',
        kind: 'tomcat',
        color: 'black',
        age: 13,
    },
    {
        id: 1,
        temper: 'fearsome',
        status: 'sleeping'
    }
];

function findValueInArray(fValue, fArray) {
    let result = false;
    let i = 0;
    while (i < fArray.length) {
        if (fArray[i] === fValue) {
            result = true;
            break;
        }
        i++;
    }
    return result;
}

function gettingObjectKeys(anyDataStructure) {
    let outKeys = [];
    if (isArray(anyDataStructure)) {
        for (const objectData of anyDataStructure) {
            if (isLiteralObject(objectData)) {
                for (const objectDataKey in objectData) {
                    if (!findValueInArray(objectDataKey, outKeys)) { // check for duplicate keys
                        outKeys[outKeys.length] = objectDataKey;
                    }
                }
            } else {
                console.log('wrong data object');
            }
        }
    } else {
        console.log('wrong data structure');
    }
    return outKeys;
}

console.log(gettingObjectKeys(myArrayObjects).join(', '));

//     - Створити функцію яка приймає масив будь яких об'ектів, та повертає масив значень всіх об'ктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function gettingObjectValues(anyDataStructure) {
    let outValues = [];
    if (isArray(anyDataStructure)) {
        for (const objectData of anyDataStructure) {
            if (isLiteralObject(objectData)) {
                for (const objectDataKey in objectData) {
                    if (!findValueInArray(objectData[objectDataKey], outValues)) { // check for duplicate values
                        outValues[outValues.length] = objectData[objectDataKey];
                    }
                }
            } else {
                console.log('wrong data object');
            }
        }
    } else {
        console.log('wrong data structure');
    }
    return outValues;
}

console.log(gettingObjectValues(myArrayObjects).join(', '));

