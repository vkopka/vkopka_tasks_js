// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// - Напишіть код, який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let id = 'content';
const elementContent = document.getElementById(id);
const text1 = elementContent.innerText;
console.log(text1);

// -- отримує текст з блоку з id "rules"
id = 'rules';
const elementRules = document.getElementById(id);
console.log(elementRules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
elementContent.innerText = 'any text';

// -- замініть текст параграфа з id 'rules' на будь-який інший
elementRules.innerText = 'any text';

// -- змініть кожному елементу колір фону на червоний
elementContent.style.background = 'red';
elementRules.style.background = 'red';

// -- змініть кожному елементу колір тексту на синій
elementContent.style.color = 'blue';
elementRules.style.color = 'blue';

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(elementRules.classList.value);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let className = 'fc_rules';
const elements = document.getElementsByClassName(className);

for (const element of elements) {
    element.style.color = 'red';
}
