// - Знайти та вивести довжину наступних стрічкових значень
let arrayStrings = ['hello world!', 'lorem ipsum', 'javascript is cool'];
let arrayLengthStrings = arrayStrings.map(element => element.length);
console.log(arrayLengthStrings);

// - Перевести до великого регістру наступні стрічкові значення
let arrayUpperStrings = arrayStrings.map(element => element.toUpperCase());
console.log(arrayUpperStrings);

// - Перевести до нижнього регістру наступні стрічкові значення
let arrayLowerStrings = arrayUpperStrings.map(element => element.toLowerCase());
console.log(arrayLowerStrings);

// - Є "брудна" стрічка ' dirty string   '. Почистити її від зайвих пробілів.
let anyString = ' dirty string   ';
let newAnyString = anyString.trim();
console.log('"' + newAnyString + '"');

// - Напишіть функцію, яка перетворює рядок на масив слів.
const stringToArray = (str, separator = ' ') => {
    let arr = [];
    if ((typeof str === "string") && (typeof separator === "string")) {
        arr = str.split(separator);
    }
    return arr;
};

let str = 'Кожен мисливець бажає знати';
let arrayWords = stringToArray(str);
console.log(arrayWords);

// - Напишіть функцію, яка повертає підрядок, що складається із зазначеної кількості символів.
const truncateLine = (str, length) => {
    let subString = '';
    if (typeof str === "string") {
        subString = str.slice(0, length);
    }
    return subString;
};

let myLength = 5;
console.log('"' + truncateLine(str, myLength) + '"');

// - Напишіть функцію, яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
const insertDash = (str, separator = ' ', replace = '-') => {
    let newString = '';
    if ((typeof str === "string") && (typeof separator === "string") && (typeof replace === "string")) {
        newString = str.toUpperCase().replaceAll(separator, replace);
    }
    return newString;
};

let anyStr = "HTML JavaScript PHP";
console.log(insertDash(anyStr));

// - Напишіть функцію, яка приймає рядок як аргумент
// і перетворює регістр першого символу рядка з нижнього регістру у верхній.
const firstCharacterToUppercase = (str) => {
    let newString = '';
    if (typeof str === "string") {
        newString = str.slice(0, 1).toLocaleUpperCase() + str.slice(1);
    }
    return newString;
};

anyStr = 'напишіть функцію, яка приймає рядок як аргумент...';
console.log(firstCharacterToUppercase(anyStr));

// - Напишіть функцію, яка повертає рядок, у якому кожне слово починається з великої літери.
const eachWordBeginsWithCapitalLetter = (str) => {
    let newString = '';
    let separator = ' ';
    if (typeof str === "string") {
        newString = str.split(separator)
            .map(value => {
                return firstCharacterToUppercase(value);
            })
            .join(separator);
    }
    return newString;
};

console.log(eachWordBeginsWithCapitalLetter(anyStr));
