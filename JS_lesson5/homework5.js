// Всі функції повинні бути описані arrow type
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calcAreaRectangle = (a, b) => {
    return a * b;
};

console.log(calcAreaRectangle(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let calcAreaCircle = (r) => {
    return Math.PI * r * r;
};

console.log(calcAreaCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
let calcAreaCylinder = (h, r) => {
    return 2 * Math.PI * r * (h + r);
};

console.log(calcAreaCylinder(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
let isArray = (subj) => {
    return (!!subj) && (subj.constructor === Array);
};

let ElementsArray = (iArray) => {
    if (isArray(iArray)) {
        for (const iArrayElement of iArray) {
            console.log(iArrayElement);
        }
    } else {
        console.log('invalid parameter');
    }
};

ElementsArray(['London', 'Goodbye', '20:00']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let TextParagraph = (text)  => {
    document.write(`<p> ${text} </p>`);
};

TextParagraph("I'm typing some text.");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ListNotifications = (text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
};

ListNotifications('Congratulations!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ListNotificationsWithCount = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
};

ListNotificationsWithCount('Reiterative', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let NumericList = (iArray) => {
    document.write(`<ol>`);
    for (const iArrayElement of iArray) {
        document.write(`<li> ${iArrayElement} </li>`);
    }
    document.write(`</ol>`);
};

NumericList([true, 'Start', 1, 2, 3, 'Finish']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let listPersons = [
    {
        id: 242,
        name: 'Bobby',
        age: 10
    },
    {
        id: 245,
        name: 'Candy',
        age: 33
    },
    {
        id: 248,
        name: 'Kleopatra',
        age: 45
    },
    {
        id: 250,
        name: 'Haris',
        age: 90
    },
];

let isLiteralObject = (subj) => {
    return (!!subj) && (subj.constructor === Object);
};

let writePersons = (fPersons) => {
    if (isArray(fPersons)) {
        for (const person of fPersons) {
            if (isLiteralObject(person)) {
                // document.write(`<div>`);
                let joinPersonData = '';
                for (const personKey in person) {
                    joinPersonData += `${personKey} :  ${person[personKey]} <br>`;
                }
                document.write('<h3>' + joinPersonData + '</h3>');
                // document.write(`</div>`);
            } else {
                console.log('Bad person in viewPersons');
            }
        }
    } else {
        console.log('Bad parameters in viewPersons')
    }
};

writePersons(listPersons);
