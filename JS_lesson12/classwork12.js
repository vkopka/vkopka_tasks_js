import {createTagElement} from '../JS_lesson10/library10.js';
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((items) => {
            // console.log(items);
            const statusButtons = {};
            const mainDiv = createTagElement('div', 'wrapper', '', '');
            for (const post of items) {
                const postDiv = createTagElement('div', 'post', '', '', mainDiv);
                postDiv.innerHTML = `
                     <h3>User ID: ${post.userId}</h3>
                     <h3>ID: ${post.id}</h3>
                     <h4>Title: ${post.title}</h4>
                     <p>Body: ${post.body}</p>
                `;

                const buttonComments = createTagElement('button', 'forms', '', 'Show comments', postDiv);

                buttonComments.addEventListener('click', () => {

                    buttonComments.innerText = 'Hide comments';

                    if (statusButtons[post.id] === undefined) {
                        fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                            .then((response) => response.json())
                            .then((items) => {
                                    // console.log(items);
                                    const mainDiv = createTagElement('div', 'postExt', '', '', postDiv);
                                    statusButtons[post.id] = mainDiv;
                                    for (const comment of items) {
                                        const commentDiv = createTagElement('div',
                                            'comments',
                                            '', '', mainDiv);
                                        // <h3>Post ID: ${comment.postId}</h3>
                                        // <h3>ID: ${comment.id}</h3>
                                        commentDiv.innerHTML = `
                                                            <h4>Name: ${comment.name}</h4>
                                                            <h4>Email: ${comment.email}</h4>
                                                            <p>Body: ${comment.body}</p>
                                        `;
                                    }
                                }
                            );
                    } else {
                        statusButtons[post.id].remove();
                        statusButtons[post.id] = undefined;
                        buttonComments.innerText = 'Show comments';
                    }
                });
            }
        }
    );

