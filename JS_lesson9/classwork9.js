const createTagElementWithClassAndText = (tag, nameClass = '', text = '') => {
    const element = document.createElement(tag);
    element.style.textAlign = 'justify';
    if (nameClass !== '') {
        element.classList.add(nameClass);
    }
    if (text !== '') {
        element.innerText = text;
    }
    return element;
};
// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Пройти його, створивши для кожного елементу масиву <div class='member'>.
for (const simpson of simpsons) {
    let tag = 'div';
    let nameClass = 'member';
    let text = '';
    let template = createTagElementWithClassAndText(tag, nameClass);
    template.style.padding = '5px';
    document.body.appendChild(template);
    const element = document.getElementsByClassName(nameClass);

    tag = 'h3';
    nameClass = '';
    text = `${simpson.name} ${simpson.surname}, ${simpson.age}`;
    template = createTagElementWithClassAndText(tag, nameClass, text);
    element[element.length - 1].appendChild(template);

    tag = 'p';
    text = `${simpson.info}`;
    template = createTagElementWithClassAndText(tag, nameClass, text);
    element[element.length - 1].appendChild(template);

    tag = 'img';
    template = createTagElementWithClassAndText(tag, nameClass);
    template.src = simpson.photo;
    template.alt = `photo ${simpson.name} ${simpson.surname}`;
    element[element.length - 1].appendChild(template);
}

// - взяти попередній масив з сімпсонами.
// Пройти його, створивши для кожного елементу масиву <div class='member'>.
// Для кожної властивості елементу створити окремий блок, та помістити його у div.member
const createBlockClassInBlock = (elementBlock, nameClass = 'inner-block') => {
    let template = createTagElementWithClassAndText('div', nameClass);
    elementBlock[elementBlock.length - 1].appendChild(template);
    template = document.getElementsByClassName('inner-block');
    return template;
};

for (const simpson of simpsons) {
    let text = '';
    let tag = 'div';
    let nameClass = 'member';
    let template = createTagElementWithClassAndText(tag, nameClass);
    document.body.appendChild(template);
    const element = document.body.getElementsByClassName(nameClass);
    element[element.length - 1].style.padding = '5px';

    for (const key in simpson) {
        const innerElement = createBlockClassInBlock(element);
        nameClass = '';

        if (key === 'photo') {
            tag = 'img';
            text = '';
        } else {
            tag = 'p';
            text = `${simpson[key]}`;
        }

        template = createTagElementWithClassAndText(tag, nameClass, text);

        if (key === 'photo') {
            template.src = simpson[key];
            template.alt = 'Photo simpson';
        }

        innerElement[innerElement.length - 1].appendChild(template);
    }
}

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 901,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png
for (const courseArrayElement of coursesArray) {
    let template = createTagElementWithClassAndText('div', 'course');
    const mainDiv = document.body.appendChild(template);

    template = createTagElementWithClassAndText('div', 'title', courseArrayElement.title);
    mainDiv.appendChild(template);

    template = createTagElementWithClassAndText('div', 'box', '');
    const boxDiv = mainDiv.appendChild(template);

    template = createTagElementWithClassAndText('div', 'month', courseArrayElement.monthDuration);
    boxDiv.appendChild(template);
    template = createTagElementWithClassAndText('div', 'hour', courseArrayElement.hourDuration);
    boxDiv.appendChild(template);

    template = createTagElementWithClassAndText('div', 'modules', '');
    const modulesDiv = mainDiv.appendChild(template);

    for (const module of courseArrayElement.modules) {
        template = createTagElementWithClassAndText('div', 'module', module);
        modulesDiv.appendChild(template);
    }
}
