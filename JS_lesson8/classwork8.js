// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який:
// a) змінює елементу з ід main_header на назву групи в якій ви вчитесь (mon-year)
let id = 'main_header';
const elementMainHeader = document.getElementById(id);
elementMainHeader.id = 'sep-2021';
console.log(elementMainHeader);

// b) робить ширину елементу ul 400px
let tag = 'ul';
const elementsUl = document.getElementsByTagName(tag);
console.log(elementsUl);

for (const element of elementsUl) {
    element.style.width = '400px';
}
console.log(elementsUl);

// c) робить ширину всіх елементів з класом linkList шириною 50%
let className = 'linkList';
let elementsClass = document.getElementsByClassName(className);
for (const element of elementsClass) {
    element.style.width = '50%';
}
console.log(elementsClass);

// d) отримує текст який зберігається в елементі з класом listElement2
className = 'listElement2';
elementsClass = document.getElementsByClassName(className);
for (const element of elementsClass) {
    console.log(element.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
tag = 'li';
const elementsLi = document.getElementsByTagName(tag);
for (const element of elementsLi) {
    element.style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
tag = 'a';
const elementsA = document.getElementsByTagName(tag);
for (const element of elementsA) {
    element.classList.add('anchor');
}
console.log(elementsA);

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
for (const element of elementsA) {
    if (element.innerText === 'link3') {
        element.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const element of elementsA) {
    element.classList.add('element_' + element.innerText);
}
console.log(elementsA);

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let color = prompt('Set background: ');
// let color = 'gray';
className = 'sub-header';
elementsClass = document.getElementsByClassName(className);
for (const element of elementsClass) {
    element.style.background = color;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment.
// Колір отримати з prompt()
color = prompt('Set color: ');
// color = 'blue';
for (const element of elementsClass) {
    if (element.innerText === 'content 2 segment') {
        element.style.color = color;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let myText = prompt('Write text: ');
// let myText = 'any text';
className = 'content_1';
elementsClass = document.getElementsByClassName(className);
for (const element of elementsClass) {
    element.innerText = myText;
}

// l) отримати елементи p та змінити їм padding на 20px
tag = 'p';
const elementsP = document.getElementsByTagName(tag);
for (const element of elementsP) {
    element.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Приклад sep-2021)
myText = 'sep-2021';
className = 'text2';
elementsClass = document.getElementsByClassName(className);
for (const element of elementsClass) {
    element.innerText = myText;
}
