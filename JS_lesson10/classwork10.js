import {createTagElement, createControlElement, createForm} from './library10.js';

// - створити 2 форми по 2 input в кожній. створити кнопку при кліку на яку зчитується
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до input через Forms API. Отже дайте формі та input всі необхідні атрибути.

// Form 1
const formDiv1 = createTagElement('div', 'forms', '', 'Form 1', createForm('form1'));
createTagElement('br', '', '', '', formDiv1);
createTagElement('hr', '', '', '', formDiv1);
// Login
const divLogin = createTagElement('div', 'pairFields', '', '', formDiv1);
createTagElement('span', 'headField', '', 'Login', divLogin);
createControlElement('input', 'text', '', 'userName', divLogin);
// Password
const divPass = createTagElement('div', 'pairFields', '', '', formDiv1);
createTagElement('span', 'headField', '', 'Password', divPass);
createControlElement('input', 'password', '', 'userPass', divPass);

// Form 2
const formDiv2 = createTagElement('div', 'forms', '', 'Form 2', createForm('form2'));
createTagElement('br', '', '', '', formDiv2);
createTagElement('hr', '', '', '', formDiv2);
// Client
const divClient = createTagElement('div', 'pairFields', '', '', formDiv2);
createTagElement('span', 'headField', '', 'Client', divClient);
createControlElement('input', 'text', '', 'Client', divClient);
// Server
const divServer = createTagElement('div', 'pairFields', '', '', formDiv2);
createTagElement('span', 'headField', '', 'Server', divServer);
createControlElement('input', 'text', '', 'Server', divServer);

const formButton = createTagElement('button', 'forms', '', 'Form data to log');

formButton.addEventListener('click', () => {
    console.log(document.forms['form1']['userName'].value);
    console.log(document.forms['form1']['userPass'].value);
    console.log(document.forms['form2']['Client'].value);
    console.log(document.forms['form2']['Server'].value);
    console.log('---------------------------');
});
createTagElement('hr', '', '', '');

// - Створити 3 input та кнопку. Один визначає кількість рядків, другий - кількість осередків, третій вміст осередків.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
const simpleDiv = createTagElement('div', 'forms', '', 'Table settings');
createTagElement('hr', '', '', '', simpleDiv);

const divLines = createTagElement('div', 'pairFields', '', '', simpleDiv);
createTagElement('span', 'headField', '', 'Lines', divLines);
const lines = createControlElement('input', 'text', '10', '', divLines);

const divColumns = createTagElement('div', 'pairFields', '', '', simpleDiv);
createTagElement('span', 'headField', '', 'Columns', divColumns);
const columns = createControlElement('input', 'text', '10', '', divColumns);

const divContent = createTagElement('div', 'pairFields', '', '', simpleDiv);
createTagElement('span', 'headField', '', 'Content', divContent);
const content = createControlElement('input', 'text', '>|<', '', divContent);
const btnTable = createTagElement('button', 'forms', '', 'Create a table', simpleDiv);

createTagElement('hr', '', '', '', simpleDiv);

btnTable.addEventListener('click', () => {
    if (+lines.value > 0 && +columns.value > 0) {
        const lineCount = +lines.value;
        const columnCount = +columns.value;
        const inText = content.value;
        const itemTable = createTagElement('table', 'itemTable', '', '', simpleDiv);
        for (let i = 0; i < lineCount; i++) {
            const itemLine = createTagElement('tr', 'itemLine', '', '', itemTable);
            for (let j = 0; j < columnCount; j++) {
                createTagElement('td', 'itemColumn', '', inText, itemLine);
            }
        }
    } else {
        console.log('The parameters are incorrect.');
    }
});

// - Створити масив не цензурних слів.
const obsceneWords = ['fool', 'stupid', 'dumb', 'retard'];
// Створити input текстового типу.
createTagElement('hr', '', '', '');
const anyText = createControlElement('input', 'text', '', '');
const btnAnyText = createTagElement('button', 'forms', '', 'Check text');
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути alert з попередженням.
// Перевірку робити при натисканні на кнопку
// btnAnyText.addEventListener('click', () => {
//     let str = anyText.value.trim().toLowerCase();
//     if (obsceneWords.some(value => str === value))) {
//         alert('An obscene word was found');
//     }
// });

// - Створити масив не цензурних слів.
// Створити input текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути alert з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
btnAnyText.addEventListener('click', () => {
    let str = anyText.value.trim().toLowerCase();
    if (obsceneWords.some(value => str.includes(value))) {
        alert('An obscene word was found');
    }
});
