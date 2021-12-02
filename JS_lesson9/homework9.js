const createTagElementWithClassAndText = (tag, nameClass = '', text = '') => {
    const element = document.createElement(tag);
    if (nameClass !== '') {
        element.classList.add(nameClass);
    }
    if (text !== '') {
        element.innerText = text;
    }
    return element;
}

// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const template = createTagElementWithClassAndText('div', '', 'This block');
template.classList.add('wrap', 'collapse', 'alpha', 'beta');
template.style.background = 'gray';
template.style.color = 'blue';
template.style.fontSize = '24px';
document.body.appendChild(template);

const divClone = template.cloneNode(true);
divClone.innerText = 'Clone block';
document.body.appendChild(divClone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього сценарій, котрий для кожного елементу масиву
// створює li та додає його до блоку .menu
// Завдання робити через цикли.
let className = 'menu';
const elementMenu = document.getElementsByClassName(className);
const menuItems = ['Main', 'Products', 'About us', 'Contacts'];
for (const menuItem of menuItems) {
    const itemLi = createTagElementWithClassAndText('li', '', menuItem);
    elementMenu[0].appendChild(itemLi);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    const template = createTagElementWithClassAndText('div', '', Object.values(course).join(', '));
    document.body.appendChild(template);
}

// - Є масив coursesAndDurationArray
// За допомоги сценарію для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
const paramTags = {
    // property: [tag, nameClass]
    'title': ['h1', 'heading'],
    'monthDuration': ['p', 'description']
};

for (const course of coursesAndDurationArray) {
    const template = document.createElement('div');
    template.classList.add('item');
    document.body.appendChild(template);
    className = 'item';
    const elementDiv = document.getElementsByClassName(className);
    for (const courseKey in course) {
        const element = createTagElementWithClassAndText(
            paramTags[courseKey][0], paramTags[courseKey][1], course[courseKey]);
        elementDiv[elementDiv.length - 1].appendChild(element);
    }
}
