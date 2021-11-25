// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не менше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
let listEmail = ['someemail@gmail.com', 'someeMAIL@gmail.com', 'someeMAIL@i.ua', 'some.email@gmail.com'];
const simpleValidatorEmail = (eMail) => {
    const separatorEmail = "@";
    const separatorDomain = ".";
    let valid = true;
    let arrayStrings = eMail.split(separatorEmail);
    if (arrayStrings.length !== 2 || arrayStrings[0].length < 2) {
        valid = false;
    } else {
        arrayStrings = arrayStrings[1].split(separatorDomain);
        if (arrayStrings.length !== 2 || arrayStrings[0].length < 2 || arrayStrings[1].length < 2) {
            valid = false;
        }
    }
    return valid;
};
console.log(listEmail.map(value => simpleValidatorEmail(value)));


// є масив, відсортувати його в низхідному порядку за кількістю елементів в полі modules
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
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

coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(coursesArray);


// - Напишіть функцію count(str, stringSearch), яка повертає кількість символів stringSearch у рядку str.
let symbol = "о";
let str = "Астрономія це наука про небесні об'єкти";  // 4
let count = (str, stringSearch) => {
    let index = str.indexOf(stringSearch);
    if (index >= 0) {
        let fragment = str.slice(index + stringSearch.length);
        return (fragment.length > 0) ? count(fragment, stringSearch) + 1 : 1;
    }
    return 0;
};
let countSubStrings = count(str, symbol);
console.log(countSubStrings);


// - Напишіть функцію, яка видаляє зайві слова з рядка str, залишивши у ній num слів.
const separator = ' ';
str = "Сила тяжіння прикладена до центру мас тіла";
const cutString = (str, num) => {
    let outString = str;
    let index = str.indexOf(separator);
    if (index >= 0) {
        outString = str.slice(0, index);
        let fragment = str.slice(index + separator.length);
        return outString + ((num > 1) ? separator + cutString(fragment, --num) : '');
    }
    return outString;
};
console.log('"' + cutString(str, 5) + '"');
