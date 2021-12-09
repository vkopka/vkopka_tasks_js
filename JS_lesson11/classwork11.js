import {createTagElement} from "../JS_lesson10/library10.js";
import {loadLocalStorage, saveLocalStorage, checkObjects} from "./library11.js";

// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з кнопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторінку favorites.html при переході на яку потрібно вивести в документ всіх обраних на попередньому етапі.

// My best friends
const idBest = 'BestFriends';  // id local storage
const friendsDiv = createTagElement('div', 'forms', '');

users.forEach(user => {
    const divNameFriend = createTagElement('div', 'pairFields', '', '', friendsDiv);
    createTagElement('span', 'headFrieds', '',
        `Name: ${user.name}\n Age: ${user.age}\n Status: ${user.status}`, divNameFriend);
    const buttonBest = createTagElement('button', 'forms', '', 'Best friend', divNameFriend);
    createTagElement('hr', '', '', '', friendsDiv);

    buttonBest.onclick = () => {
        const favorites = loadLocalStorage(idBest);
        if (favorites.length === 0 || !favorites.some(value => !checkObjects(value, user))) {
            // console.log(user);
            favorites.push(user);
        }
        saveLocalStorage(idBest, favorites);
    };
});

const ref = createTagElement('a', '', '', 'Best friends', friendsDiv);
ref.href = "./favorites.html";

