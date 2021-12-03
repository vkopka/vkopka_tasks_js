const users = [
    {
        name: 'vasya',
        age: 31,
        status: false,
        address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
    },
    {
        name: 'petya',
        age: 30,
        status: true,
        address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
    },
    {
        name: 'olya',
        age: 28,
        status: false,
        address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
    },
    {
        name: 'max',
        age: 30,
        status: true,
        address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
    },
    {
        name: 'anya',
        age: 31,
        status: false,
        address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
    },
    {
        name: 'oleg',
        age: 28,
        status: false,
        address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
    },
    {
        name: 'andrey',
        age: 29,
        status: true,
        address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
    },
    {
        name: 'masha',
        age: 30,
        status: true,
        address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
    },
    {
        name: 'olya',
        age: 31,
        status: false,
        address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
    },
    {
        name: 'max',
        age: 31,
        status: true,
        address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
    }
];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
const addresses = [];
for (const user of users) {
    addresses.push(user.address);
}
// console.log(addresses);

const createLine = () => document.body.appendChild(document.createElement('hr'));

createLine();

// - За допомоги циклу пройти  масив users, записати кожного user в свій блок за допомоги document.createElement.
// Всі данні в одному блоці.
const createElementTagClassText = (itemTag, nameClass = '', text = '') => {
    const element = document.createElement(itemTag);
    if (text !== '') {
        element.innerText = text;
    }
    if (nameClass !== '') {
        element.classList.add(nameClass);
    }
    return element;
};

for (const user of users) {
    let template = createElementTagClassText('div', 'user');
    const userDiv = document.body.appendChild(template);
    userDiv.innerText = Object.keys(user).map(value => {
        return (typeof user[value] === "object") ?
            `${value}: ` + Object.keys(user[value]).map(value1 => `${value1} ${user[value][value1]}`).join(', ') :
            `${value}: ${user[value]}`;
    }).join(', ');
}

createLine();

// - За допомоги циклу пройти масив users, записати кожного user в свій блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
for (const user of users) {
    let template = createElementTagClassText('div', 'user');
    const userDiv = document.body.appendChild(template);
    for (const userKey in user) {
        template = createElementTagClassText('div', `${userKey}`);
        const itemDiv = userDiv.appendChild(template);
        if (typeof user[userKey] === "object") {
            itemDiv.innerText = // `${userKey}: ` +
                Object.keys(user[userKey]).map(value1 => `${value1} ${user[userKey][value1]}`).join(', ')
        } else {
            itemDiv.innerText = ` ${userKey}: ${user[userKey]}`;
        }
    }
}

createLine();

// - За допомоги циклу пройти  масив users, записати кожного user в свій блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const user of users) {
    let template = createElementTagClassText('div', 'user');
    const userDiv = document.body.appendChild(template);
    for (const userKey in user) {
        template = createElementTagClassText('div', `${userKey}`);
        const itemDiv = userDiv.appendChild(template);
        if (typeof user[userKey] === "object") {
            // itemDiv.innerText = `${userKey}`;
            for (const item in user[userKey]) {
                template = createElementTagClassText('div', `${item}`);
                const itemDiv1 = itemDiv.appendChild(template);
                itemDiv1.innerText = ` ${item}: ${user[userKey][item]}`;
            }
        } else {
            itemDiv.innerText = ` ${userKey}: ${user[userKey]}`;
        }
    }
}

createLine();

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити сценарій, котрий зчитує всі заголовки, та робить в блоці з id=content з них список (ul>li),
// який буде змістом того, що знаходиться на сторінці.
// сценарій повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
const itemUl = document.getElementById('content').appendChild(createElementTagClassText('ul'));

document.querySelectorAll('#wrap > .rules > h2').forEach(value => {
    let template = createElementTagClassText('li', '', value.textContent);
    itemUl.appendChild(template);
});

// createLine();

// - Є масив котрий характеризує правила.
// Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// При цьому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання сценарію повинна бути структура яка міститься в блоці wrap файла rule.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

for (let i = 0; i < rules.length; i++) {
    const item = document.body.appendChild(
        createElementTagClassText('div', 'rules')
    );
    item.classList.add(`rule${i + 1}`);
    const title = item.appendChild(
        createElementTagClassText('div', 'titles', rules[i].title)
    );
    title.classList.add(`title${i + 1}`);
    const body = item.appendChild(
        createElementTagClassText('div', 'bodies', rules[i].body)
    );
    body.classList.add(`body${i + 1}`);
}
