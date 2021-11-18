// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calculationAreaRectangle(a, b) {
    return a * b;
}

console.log(calculationAreaRectangle(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function calculationAreaCircle(r) {
    return Math.PI * r * r;
}

console.log(calculationAreaCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
function calculationAreaCylinder(h, r) {
    return 2 * Math.PI * r * (h + r);
}

console.log(calculationAreaCylinder(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
function viewElementsArray(iArray) {
    if (Array.isArray(iArray)) {
        for (const iArrayElement of iArray) {
            console.log(iArrayElement);
        }
    } else {
        console.log('invalid parameter');
    }
}

viewElementsArray(['London', 'Goodbye', '20:00']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createTextParagraph(text) {
    document.write(`<p> ${text} </p>`);
}

createTextParagraph("I'm typing some text.");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createListNotifications(text) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
}

createListNotifications('Congratulations!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createListNotificationsWithCount(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
}

createListNotificationsWithCount('Reiterative', 2);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createNumericList(iArray) {
    document.write(`<ol>`);
    for (const iArrayElement of iArray) {
        document.write(`<li> ${iArrayElement} </li>`);
    }
    document.write(`</ol>`);
}

createNumericList([true, 'Start', 1, 2, 3, 'Finish']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let listPerson = [
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

isLiteralObject = function (subj) {
    return (!!subj) && (subj.constructor === Object);
};

function viewPersons(Persons) {
    if (Array.isArray(Persons)) {
        for (const person of Persons) {
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
}

viewPersons(listPerson);
