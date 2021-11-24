// - Дано список імен
// let arrayNames = ['harry..Potter', 'Ron---weasley', 'hermione__granger'];
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступний вигляд
// 'Harry Potter', 'Ron Weasley', 'Hermione Granger'
const deleteBadSeparators = (str) => {
    let charSet = ' _-+/.,:;=\|!?'; // Bad separators
    let separator = '';             // we will cut the string letter by letter
    let previousChar = '';          // previous character
    let returnChar = '';
    let newString = '';
    if (typeof str === "string") {
        newString = str.trim()
            .split(separator)
            .map(value => {
                if (charSet.includes(value)) {  // check each character for a bad separator
                    if (previousChar === ' ') {
                        returnChar = '';
                    } else {
                        returnChar = previousChar = ' ';
                    }
                } else {
                    returnChar = previousChar = value;
                }
                return returnChar;
            })
            .join('');
    }
    return newString;
};

const eachWordBeginsWithCapitalLetter = (str) => {  // the first capital letter in a words
    let newString = '';
    let separator = ' ';
    if (typeof str === "string") {
        newString = str.split(separator)
            .map(value => {
                return value.slice(0, 1).toLocaleUpperCase() + value.slice(1);
            })
            .join(separator);
    }
    return newString;
};

const normalizeName = (str) => {
    return eachWordBeginsWithCapitalLetter(deleteBadSeparators(str));
};

const normalizeArrayNames = (arr) => {
    if (Array.isArray(arr)) {
        arr.map((value, index, array) => {
            array[index] = normalizeName(value);
        });
    }
};

let arrayNames = ['harry..Potter', 'Ron---weasley', 'hermione__granger', 'леся=!!=українка'];
normalizeArrayNames(arrayNames);
console.log(arrayNames);


// - створити функцію, яка генерує масив випадкових числових цілих значень в діапазоні від 0 до 100.
const generationArrayInteger = (count, start = 0, end = 100) => {
    let newArray = new Array(0);
    while (newArray.length < count) {
        newArray.push(Math.round(Math.random() * (end - start)) + start);
    }
    return newArray;
};


// - створити (або згенерувати, за допомоги попередньої функції) масив випадкових цілих числових значень.
// Відсортувати його за допомоги sort
let arr = generationArrayInteger(10);
console.log(arr);
arr.sort((a, b) => {
    return a - b;
});
console.log(arr);


// - створити (або згенерувати, за допомоги попередньої функції) масив випадкових цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let arr1 = generationArrayInteger(10);
let arrOut = arr1.filter(value => !(value % 2));
console.log(arr1);
console.log(arrOut);


// - створити масив випадкових цілих числових значень (або згенерувати, за допомоги попередньої функції).
// за допомоги map та callback перетворити всі об'єкти в масиві на стрічкові.
let arr2 = generationArrayInteger(10);
console.log(arr2);
arr2.map((value, index, array) => {
    array[index] = value + '';
});
console.log(arr2);


// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let arr3 = generationArrayInteger(5);
const sortNums = (arr, direction = 'ascending') => {
    arr.sort((a, b) => {
        return (direction === 'ascending') ? a - b : b - a;
    });
};
sortNums(arr3, 'ascending');
console.log(arr3);
sortNums(arr3, 'descending');
console.log(arr3);


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(coursesAndDurationArray);

// -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
let coursesFilter = coursesAndDurationArray.filter(value => (value.monthDuration > 5));
console.log(coursesFilter);


// - Напишіть функцію cuttingString(str, num), яка ділить рядок на підрядки, що складаються з символів n.
const cuttingString = (str, num) => {
    let newArray = [];
    if (typeof str === "string" && typeof num === "number") {
        while (str.length > 0) {
            newArray.push(str.slice(0, num));
            str = str.slice(num);
        }
    }
    return newArray;
};
let arraySubStrings = cuttingString('Напишіть функцію', 5);
console.log(arraySubStrings);
