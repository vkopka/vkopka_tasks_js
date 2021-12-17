// 4. Вивести всю, без винятку, інформацію про об'єкт user на кнопку/посилання якого було здійснено натискання раніше.
// 5. Додати кнопку "post of current user", при натисканні на яку, з'являються title всіх постів поточного користувача.
// https://jsonplaceholder.typicode.com/users/USER_ID/posts
// 6. Кожному посту додати кнопку/посилання, при натисканні на яку відбувається перехід на сторінку post-details.html,
// яка має детальну інформацію про поточний пост.
import {
    loadLocalStorage, createTagElement,
    url, userId
} from "./library-mp.js";

// const ref = './html/post-details.html';  // link to the page post-details

const id = loadLocalStorage(userId);

id.forEach(item => {
    const req = 'users/' + item;
    const mainDiv = createTagElement('div', 'wrapper', '', '');
    // console.log(req);
    fetch(url + req)
        .then((response) => response.json())
        .then((items) => {
            for (const user in items) {
                console.log(JSON.stringify(items[user]));
                const userDiv = createTagElement('div', 'user', '', '', mainDiv);
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
                // createTagElement('span', 'userName', '', `${user.name}`, userDiv);
                // const userRef = createTagElement('a', 'userRef', '', 'More details', userDiv);
                // userRef.href = ref;
                // // userRef.target = '_blank';  // open page in new tab
                // userRef.onclick = () => {
                //     saveLocalStorage(userId, [user.id]);
                // };
            }

        });
});
