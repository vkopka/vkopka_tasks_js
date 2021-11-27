const viewLineToLog = () => {
    console.log('-------------------------');
};

let arrayUsers = [];
let ids = [21, 13, 40, 10, 19, 30, 5, 33, 11, 22];
let names = ['Sofi', 'Andy', 'Dima', 'Lola', 'Bobby', 'Maggi', 'Set', 'Colin', 'Tamara', 'Joni'];
let surnames = ['Clain', 'Buster', 'Pedros', 'First', 'Fate', 'Stars', 'Bloomer', 'Noise', 'Zunder', 'Metro'];
let orders = [
    ['pomade', 'mirror', 'lotion'],
    ['book'],
    ['car', 'razor', 'drill', 'hoover', 'gun'],
    ['candy', 'doll'],
    ['book', 'mirror', 'lotion', 'razor'],
    ['hoover', 'gun', 'car', 'lotion', 'book', 'notepad'],
    ['candy', 'book'],
    ['car', 'notepad'],
    ['pomade', 'mirror', 'lotion'],
    ['notepad', 'pc 2200', 'smartphone', 'car', 'bubble gum', 'popcorn']
];

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.viewUser = function () {
        console.log(`${this.id} ${this.name} ${this.surname} ${this.email} ${this.phone}`);
    };
}

for (let i = 0; i < 10; i++) {
    arrayUsers[i] = new User(
        ids[i],
        names[i],
        surnames[i],
        names[i].toLowerCase() + '.' + surnames[i].toLowerCase() + '@gmail.com',
        '800-555');

    arrayUsers[i].viewUser();
}
viewLineToLog();
// console.log(arrayUsers);

// - Взяти масив з User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
let arrayFilterUsers = arrayUsers.filter(user => !(user.id % 2));
console.log(arrayFilterUsers);
viewLineToLog();

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
arrayUsers.sort((user1, user2) => user1.id - user2.id);
console.log(arrayUsers);
viewLineToLog();

// - створити клас для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

    viewClient() {
        console.log(`${this.id} ${this.name} ${this.surname} ${this.email} ${this.phone}`);
    }

    viewClientOrder() {
        console.log(this.order.join(', '));
    }
}

let arrayClients = [];
for (let i = 0; i < 10; i++) {
    arrayClients[i] = new Client(
        ids[i],
        names[i],
        surnames[i],
        names[i].toLowerCase() + '.' + surnames[i].toLowerCase() + '@gmail.com',
        '800-555',
        orders[i]
    );
    arrayClients[i].viewClient();
    arrayClients[i].viewClientOrder();
}
viewLineToLog();

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
arrayClients.sort((client1, client2) => client1.order.length - client2.order.length);

for (const itemClient of arrayClients) {
    console.log(`Name: ${itemClient.name} goods: ${itemClient.order.length}`);
}
