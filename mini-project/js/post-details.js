// 7 Вивести всю, без винятку інформацію про об'єкт post на кнопку/посилання якого був здійснений клік раніше.
// 8 Нижче інформації про пост, вивести всі коментарі поточного поста (посилання для отримання інформації
// - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок з інформацією про пост зверху. Коментарі – по 4 в ряд.
import {
    loadLocalStorage, createTagElement,
    url, postId
} from "./library-mp.js";

const id = loadLocalStorage(postId);

let showMessage = true;  // Show messages on button click

id.forEach(
    item => viewPostData(item)
);

function viewPostData(item) {
    const req = 'posts/' + item;
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
                } else {
                    valueStr = value;
                }
                createTagElement('span', 'value', '', valueStr, userDiv);
            }
            const postAll = createTagElement('button', 'postAll', '', 'Show comments', mainDiv);
            postAll.onclick = () => {
                if (showMessage) {
                    viewComments(item);
                    showMessage = false;  // Don't show messages on button click
                }
            };
        });
}

function viewComments(item) {
    const req = 'posts/' + item + '/comments';
    const mainDiv = createTagElement('div', 'wrapper', '', '');
    fetch(url + req)
        .then((response) => response.json())
        .then((items) => {
            let i = 0;
            let pairDiv = undefined;
            for (const post of items) {
                console.log(JSON.stringify(post));
                if (i % 4 < 1) {
                    pairDiv = createTagElement('div', 'pair', '', '', mainDiv);
                }
                const postDiv = createTagElement('div', 'user', '', '', pairDiv);
                createTagElement('span', 'post', '', ` ${post.id} ${post.body}`, postDiv);
                // createTagElement('span', 'userName', '', `${user.name}`, userDiv);
                // const userRef = createTagElement('a', 'userRef', '', 'More details', postDiv);
                // userRef.href = ref;
                // // userRef.target = '_blank';  // open page in new tab
                // userRef.onclick = () => {
                //     saveLocalStorage(postId, [post.id]);
                // };
                i++;
            }
        });
}
