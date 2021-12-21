// 4. Вивести всю, без винятку, інформацію про об'єкт user на кнопку/посилання якого було здійснено натискання раніше.
// 5. Додати кнопку "post of current user", при натисканні на яку, з'являються title всіх постів поточного користувача.
// https://jsonplaceholder.typicode.com/users/USER_ID/posts
// блоки з короткою інформацією про post - у ряд по 5 об'єктів.
// 6. Кожному посту додати кнопку/посилання, при натисканні на яку відбувається перехід на сторінку post-details.html,
// яка має детальну інформацію про поточний пост.
import {
    loadLocalStorage, createTagElement, saveLocalStorage,
    url, userId, postId
} from "./library-mp.js";

const ref = './post-details.html';  // link to the page post-details

const id = loadLocalStorage(userId);

let showMessage = true;  // Show messages on button click

id.forEach(
    item => viewUserData(item)
);

function viewUserData(item) {
    const req = 'users/' + item;
    const mainDiv = createTagElement('div', 'wrapper', '', '');
    fetch(url + req)
        .then((response) => response.json())
        .then((items) => {
            for (const user in items) {
                // console.log(JSON.stringify(items[user]));
                const userDiv = createTagElement('div', 'userAll', '', '', mainDiv);
                createTagElement('span', 'property', '', ` ${user}`, userDiv);
                const value = items[user];
                let valueStr = '';
                if (typeof value === "object") {
                    valueStr = '';
                    for (const valueKey in value) {
                        if (valueKey === 'geo') {
                            valueStr += `${valueKey}: ${value[valueKey]['lat']}, ${value[valueKey]['lng']}\n`;
                        } else {
                            valueStr += `${valueKey}: ${value[valueKey]}\n`;
                        }
                    }
                } else {
                    valueStr = value;
                }
                createTagElement('span', 'value', '', valueStr, userDiv);
            }
            const postAll = createTagElement('button', 'postAll', '', 'Show messages', mainDiv);
            postAll.onclick = () => {
                if (showMessage) {
                    viewPosts(item);
                    showMessage = false;  // Don't show messages on button click
                }
            };
        });
}

function viewPosts(item) {
    const req = 'users/' + item + '/posts';
    const mainDiv = createTagElement('div', 'wrapper', '', '');
    fetch(url + req)
        .then((response) => response.json())
        .then((items) => {
            let i = 0;
            let pairDiv = undefined;
            for (const post of items) {
                // console.log(JSON.stringify(post));
                if (i % 5 < 1) {
                    pairDiv = createTagElement('div', 'pair', '', '', mainDiv);
                }
                const postDiv = createTagElement('div', 'user', '', '', pairDiv);
                createTagElement('span', 'post', '', ` ${post.id} ${post.title}`, postDiv);
                // createTagElement('span', 'userName', '', `${user.name}`, userDiv);
                const userRef = createTagElement('a', 'userRef', '', 'More details', postDiv);
                userRef.href = ref;
                // userRef.target = '_blank';  // open page in new tab
                userRef.onclick = () => {
                    saveLocalStorage(postId, [post.id]);
                };
                i++;
            }
        });
}
