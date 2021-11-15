// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let xNumber = [1, 2, 3, 4, 5];
let xString = ['come', 'to', 'me', 'and', 'run'];
let xAny = ['good', true, 'bad', false, 4];
console.log(xNumber.toString());  // можна так
console.log('' + xString);        // или так
console.log(xAny.join(', '));     // но так красиво

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
let xArray = [];
xArray[0] = 21;
xArray[1] = '<';
xArray[2] = 33;
console.log(xArray.join(' '));

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> Привіт студентам від JS </div>`);
}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> ${i} єлемент масиву </div>`);
}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let itemCount = 20;
let item = 1;
while (item <= itemCount) {
    document.write(`<h1> Великий жарт </h1>`);
    item++;
}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
item = 1;
while (item <= itemCount) {
    document.write(`<h1> ${item} ітерація </h1>`);
    item++;
}

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let vNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const item of vNumber) {
    console.log(item);
}
// Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let vString = ['i9', 'i8', 'i7', 'i6', 'i5', 'i4', 'i3', 'i2', 'i1', 'i0'];
for (let item of vString) {
    console.log(item);
}
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let vAny = ['9', [], {}, 6, true, '4', 3, 'for', 'false', 'while'];
for (let item of vAny) {
    console.log(item);
}
// Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let vTarget = [9, false, 'обід', 6, true, 'for', 3, 'of', 'step', false];
for (let item of vTarget) {
    if (typeof item === "boolean") {
        console.log(item);
    }
}
// За допомогою if та typeof вивести тільки числові елементи
for (let item of vTarget) {
    if (typeof item === "number") {
        console.log(item);
    }
}
// За допомогою if та typeof вивести тільки рядкові елементи
for (let item of vTarget) {
    if (typeof item === "string") {
        console.log(item);
    }
}

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let zEmpty = [];
zEmpty[0] = 'lol';
zEmpty[1] = true;
zEmpty[2] = 'жах';
zEmpty[3] = 100;
zEmpty[4] = '%';
zEmpty[5] = false;
zEmpty[6] = 'return';
zEmpty[7] = 'me';
zEmpty[8] = 'come';
zEmpty[9] = 'back';
for (let item of zEmpty) {
    console.log(item);
}
// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(` ${i}`);
}
document.write(`<br>`);
// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(` ${i}`);
}
document.write(`<br>`);
// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(` ${i}`);
}
document.write(`<br>`);
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// Вообще-то энциклопедия вкладывает иной смысл в слово ПАРА.
// Наверно имелись ввиду четные.
for (let i = 1; i <= 100; i++) {
    if (!(i % 2)) {
        console.log(i);
        document.write(` ${i}`);
    }
}
document.write(`<br>`);
// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// Наверно имелись ввиду нечетные.
for (let i = 1; i <= 100; i++) {
    if (i % 2) {
        console.log(i);
        document.write(` ${i}`);
    }
}
document.write(`<br>`);

