// 1. Отримати масив об'єктів user з endpoint`а https://jsonplaceholder.typicode.com/users
// index.html - всі блоки з user - по 2 до ряду. кнопки/посилання знаходяться під інформацією про user.
// 2. Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3. Додати кожному блоку кнопку/посилання, при натисканні на яку відбувається перехід на сторінку
// user-details.html, яка має детальну інформацію про об'єкт, на який натиснули.
import {
    createTagElement, saveLocalStorage,
    url, userId
} from "./library-mp.js";

const ref = './html/user-details.html';  // link to the page user-details
const req = 'users';
const mainDiv = createTagElement('div', 'wrapper', '', '');

fetch(url + req)
    .then((response) => response.json())
    .then((items) => {
            // console.log(items);
            let i = 0;
            let pairDiv = undefined;
            for (const user of items) {
                if (i % 2 < 1) {
                    pairDiv = createTagElement('div', 'pair', '', '', mainDiv);
                }
                const userDiv = createTagElement('div', 'user', '', '', pairDiv);
                createTagElement('span', 'userId', '', ` ${user.id} ${user.name}`, userDiv);
                // createTagElement('span', 'userName', '', `${user.name}`, userDiv);
                const userRef = createTagElement('a', 'userRef', '', 'More details', userDiv);
                userRef.href = ref;
                // userRef.target = '_blank';  // open page in new tab
                userRef.onclick = () => {
                    saveLocalStorage(userId, [user.id]);
                };
                i++;
            }
        }
    );
