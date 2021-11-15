// Зробити масив з 10 чисел 2,17,13,6,22,31,45,66,100,-18 та:
let xArrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while
let itemNumber = 0;
console.log(`---------------`);
while (itemNumber < xArrays.length) {
    console.log(xArrays[itemNumber]);
    itemNumber++;
}
// 2. перебрати його циклом for
console.log(`---------------`);
for (let i = 0; i < xArrays.length; i++) {
    console.log(xArrays[i]);
}
// 3. перебрати циклом while та вивести числа тільки з непарним індексом
console.log(`---------------`);
itemNumber = 0;
while (itemNumber < xArrays.length) {
    if (itemNumber % 2) {
        console.log(xArrays[itemNumber]);
    }
    itemNumber++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log(`---------------`);
for (let i = 0; i < xArrays.length; i++) {
    if (i % 2) {
        console.log(xArrays[i]);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log(`---------------`);
itemNumber = 0;
while (itemNumber < xArrays.length) {
    if (!(itemNumber % 2)) {
        console.log(xArrays[itemNumber]);
    }
    itemNumber++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log(`---------------`);
for (let i = 0; i < xArrays.length; i++) {
    if (!(i % 2)) {
        console.log(xArrays[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log(`---------------`);
for (let i = 0; i < xArrays.length; i++) {
    if (!(xArrays[i] % 3)) {
        xArrays[i] = "okten";
    }
}
console.log(xArrays.join(', '));

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//  Восстанавливаем исходные значения
xArrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 9.1 перебрати його циклом while
itemNumber = xArrays.length - 1;
console.log(`---------------`);
while (itemNumber >= 0) {
    console.log(xArrays[itemNumber]);
    itemNumber--;
}
// 9.2 перебрати його циклом for
console.log(`---------------`);
for (let i = xArrays.length - 1; i >= 0; i--) {
    console.log(xArrays[i]);
}
// 9.3 перебрати циклом while та вивести числа тільки з непарним індексом
console.log(`---------------`);
itemNumber = xArrays.length - 1;
while (itemNumber >= 0) {
    if (itemNumber % 2) {
        console.log(xArrays[itemNumber]);
    }
    itemNumber--;
}
// 9.4 перебрати циклом for та вивести  числа тільки з непарним індексом
console.log(`---------------`);
for (let i = xArrays.length - 1; i >= 0; i--) {
    if (i % 2) {
        console.log(xArrays[i]);
    }
}
// 9.5 перебрати циклом while та вивести  числа тільки парні  значення
itemNumber = xArrays.length - 1;
console.log(`---------------`);
while (itemNumber >= 0) {
    if (!(itemNumber % 2)) {
        console.log(xArrays[itemNumber]);
    }
    itemNumber--;
}
// 9.6 перебрати циклом for та вивести  числа тільки парні  значення
console.log(`---------------`);
for (let i = xArrays.length - 1; i >= 0; i--) {
    if (!(i % 2)) {
        console.log(xArrays[i]);
    }
}
// 9.7 замінити кожне число кратне 3 на слово "okten"
console.log(`---------------`);
for (let i = xArrays.length - 1; i >= 0; i--) {
    if (!(xArrays[i] % 3)) {
        xArrays[i] = "okten";
    }
}
console.log(xArrays.reverse().join(', '));

