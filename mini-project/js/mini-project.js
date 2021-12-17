// 1. Отримати масив об'єктів user з endpoint`а https://jsonplaceholder.typicode.com/users
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
            for (const user of items) {
                const userDiv = createTagElement('div', 'user', '', '', mainDiv);
                createTagElement('span', 'userId', '', ` ${user.id}`, userDiv);
                createTagElement('span', 'userName', '', `${user.name}`, userDiv);
                const userRef = createTagElement('a', 'userRef', '', 'More details', userDiv);
                userRef.href = ref;
                // userRef.target = '_blank';  // open page in new tab
                userRef.onclick = () => {
                    saveLocalStorage(userId, [user.id]);
                };
            }
        }
    );
