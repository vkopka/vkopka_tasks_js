import {createTagElement} from '../JS_lesson10/library10.js';
// 1. Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застосувати стилі, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередині div.post
// https://jsonplaceholder.typicode.com/posts
// {
//     id: 1,
//     title: '...',
//     body: '...',
//     userId: 1
// }
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((items) => {
            // console.log(items);
            const mainDiv = createTagElement('div', 'wrapper', '', '');
            for (const post of items) {
                const postDiv = createTagElement('div', 'post', '', '', mainDiv);
                postDiv.innerHTML = `
                     <h3>User ID: ${post.userId}</h3>
                     <h3>ID: ${post.id}</h3>
                     <h4>Title: ${post.title}</h4>
                     <p>Body: ${post.body}</p>
                `;
            }
        }
    );

// 2. Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередині div.comment
// https://jsonplaceholder.typicode.com/comments
// {
//     "postId": 1,
//     "id": 1,
//     "name": "",
//     "email": "",
//     "body": ""
// }
fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((items) => {
            // console.log(items);
            const mainDiv = createTagElement('div', 'wrapper', '', '');
            for (const comment of items) {
                const commentDiv = createTagElement('div', 'post', '', '', mainDiv);
                commentDiv.innerHTML = `
                     <h3>Post ID: ${comment.postId}</h3>
                     <h3>ID: ${comment.id}</h3>
                     <h4>Name: ${comment.name}</h4>
                     <h4>Email: ${comment.email}</h4>
                     <p>Body: ${comment.body}</p>
                `;
            }
        }
    );
