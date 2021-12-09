import {createTagElement, createControlElement, createForm} from '../JS_lesson10/library10.js';
// - створити форму з input для name та age. При відправленні форми записати об'єкт в localstorage
const empty = '';

// Form
const formDiv = createTagElement('div', 'forms', '', 'Form User', createForm('formUser'));
createTagElement('br', '', '', '', formDiv);
createTagElement('hr', '', '', '', formDiv);
// Name
const divName = createTagElement('div', 'pairFields', '', '', formDiv);
createTagElement('span', 'headField', '', 'Name', divName);
createControlElement('input', 'text', '', 'userName', divName);
// Age
const divAge = createTagElement('div', 'pairFields', '', '', formDiv);
createTagElement('span', 'headField', '', 'Age', divAge);
createControlElement('input', 'text', '', 'userAge', divAge);

const formButton = createTagElement('button', 'forms', '', 'User data send', formDiv);

let id = '';  // id local storage

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInputUser() {
        this.name = document.forms['formUser']['userName'].value;
        this.age = document.forms['formUser']['userAge'].value;
    }

    saveLocalStorage() {
        window.localStorage.setItem(id, JSON.stringify(this));   // JSON.parse();
    }
}

const inputUser = new User(empty, empty);

formButton.addEventListener('click', () => {
    id = 'inputUser';  // id local storage
    inputUser.getInputUser();
    inputUser.saveLocalStorage();
});

// -створити форму з input для model, type та volume автівки.
// При відправленні форми об'єкти зберігаються в масиві в локальному сховищі.

// Form Auto
const formDiv2 = createTagElement('div', 'forms', '', 'Form Auto', createForm('formAuto'));
createTagElement('br', '', '', '', formDiv2);
createTagElement('hr', '', '', '', formDiv2);
// autoModel
const divModel = createTagElement('div', 'pairFields', '', '', formDiv2);
createTagElement('span', 'headField', '', 'Model', divModel);
createControlElement('input', 'text', '', 'autoModel', divModel);
// autoType
const divType = createTagElement('div', 'pairFields', '', '', formDiv2);
createTagElement('span', 'headField', '', 'Type', divType);
createControlElement('input', 'text', '', 'autoType', divType);
// autoVolume
const divVolume = createTagElement('div', 'pairFields', '', '', formDiv2);
createTagElement('span', 'headField', '', 'Volume', divVolume);
createControlElement('input', 'text', '', 'autoVolume', divVolume);

const formButton2 = createTagElement('button', 'forms', '', 'Auto data send', formDiv2);

class Auto {
    constructor(model, type, volume) {
        this.model = model;
        this.type = type;
        this.volume = volume;
    }

    getInputAuto() {
        this.model = document.forms['formAuto']['autoModel'].value;
        this.type = document.forms['formAuto']['autoType'].value;
        this.volume = document.forms['formAuto']['autoVolume'].value;
    }

    saveLocalStorage() {
        const arrayAuto = (JSON.parse(window.localStorage.getItem(id)) || []).concat(this);
        window.localStorage.setItem(id, JSON.stringify(arrayAuto));
    }
}

const inputAuto = new Auto(empty, empty, empty);

formButton2.addEventListener('click', () => {
    id = 'inputAuto';  // id local storage
    inputAuto.getInputAuto();
    inputAuto.saveLocalStorage();
});
