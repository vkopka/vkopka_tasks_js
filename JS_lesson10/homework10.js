import {createTagElement, createControlElement} from './library10.js';

const bRestore = createControlElement('input', 'button', 'Restore the start screen');
bRestore.onclick = () => {
    pText.style.display = '';
    bText.value = 'Click to hide the text above';
    bToHide.style.display = '';
    inputAge.value = '';
    ul.style.display = '';
    let items = document.body.getElementsByClassName('body');
    for (const item of items) {
        item.style.display = 'none';
    }
};
createTagElement('br', '', 'text', '');  // <br>
createTagElement('br', '', 'text', '');  // <br>

// - Створити довільний елемент з id = text.
const pText = createTagElement('p', '', 'text', 'Any text');
createTagElement('br', '', 'text', '');  // <br>

// використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const bText = createControlElement('input', 'button', 'Click to hide the text above');
bText.onclick = () => {
    if (pText.style.display === 'none') {
        pText.style.display = '';
        bText.value = 'Click to hide the text above';
    } else {
        pText.style.display = 'none';
        bText.value = 'Click to show the text above';
    }
};
createTagElement('br', '', 'text', '');  // <br>
createTagElement('br', '', 'text', '');  // <br>

// - Створіть кнопку, при Клацніть на яку, вона буде ховати себе.
const bToHide = createControlElement('input', 'button', 'Click to hide me');
bToHide.onclick = () => {
    bToHide.style.display = 'none';
};
createTagElement('br', '', 'text', '');  // <br>
createTagElement('br', '', 'text', '');  // <br>

// - створити input який приймає вік людини та кнопку яка підтверджує дію.
const inputAge = createControlElement('input', 'number', '');
const bConfirm = createControlElement('input', 'button', 'Confirm');
createTagElement('br', '', 'text', '');  // <br>
createTagElement('br', '', 'text', '');  // <br>
// При натисканні на кнопку зчитати інформацію з input та перевірити вік чи менше він ніж 18,
// та повідомити про це користувача
bConfirm.onclick = () => {
    if (inputAge.value === '') {
        alert('Не введений вік');
    } else if (inputAge.value < 18) {
        alert('Дуже малий вік');
    }
};

// - Створіть меню, яке розкривається/згортається під час кліку
// <div id="menu">
//     <h3 id="title"> Розпорядок прийому їжі </h4>
//     <ul>
//         <li> Сніданок </li>
//         <li> Полудень </li>
//         <li> Обід     </li>
//         <li> Вечеря   </li>
//     </ul>
// </div>
const arrayEatingSchedule = ['Сніданок', 'Полудень', 'Обід', 'Вечеря'];
const menu = createTagElement('div', '', 'menu', '');
const title = createTagElement('h3', '', 'title', 'Розпорядок прийому їжі', menu);
const ul = createTagElement('ul', '', 'ul', '', menu);
arrayEatingSchedule.forEach(value => {
    createTagElement('li', 'EatingSchedule', '', value, ul);
});
title.onclick = () => {
    if (ul.style.display === 'none') {
        ul.style.display = '';
    } else {
        ul.style.display = 'none';
    }
};
createTagElement('br', '', 'text', '');  // <br>

// - Створити перелік коментарів , приклад об'єкта коментаря
const comments = [
    {
        title: '<br>',
        body: 'Встановлює переклад рядка у тексті (повернення каретки).'
    },
    {
        title: '<hr>',
        body: 'Малює горизонтальну пряму.'
    },
    {
        title: '<p>',
        body: 'Являє собою текстовий абзац.'
    }
];
// Вивести список коментарів у документ, кожен у своєму блоці.
// Додайте кожному коментарю за кнопкою для згортання його body.
for (const comment of comments) {
    const itemDiv = createTagElement('div', 'wrapper', '', '');
    createTagElement('h3', 'title', '', comment.title, itemDiv);
    const itemP = createTagElement('p', 'body', '', comment.body, itemDiv);
    itemP.style.display = 'none';
    const bSwitch = createControlElement('input', 'button', 'Пояснення',itemDiv);
    bSwitch.classList.add('button');
    bSwitch.onclick = () => {
        if (itemP.style.display === 'none') {
            itemP.style.display = '';
        } else {
            itemP.style.display = 'none';
        }
    };
}
