import {createTagElement} from "../JS_lesson10/library10.js";
import {loadLocalStorage} from "./library11.js";

// My best friends
const idBest = 'BestFriends';  // id local storage
const favorites = loadLocalStorage(idBest);
const favoritesDiv = createTagElement('div', 'forms', '');

favorites.forEach(user => {
    const divNameFriend = createTagElement('div', 'pairFields', '', '', favoritesDiv);
    createTagElement('span', 'headFrieds', '',
        `Name: ${user.name}\n Age: ${user.age}\n Status: ${user.status}`, divNameFriend);
    createTagElement('hr', '', '', '', favoritesDiv);
});
