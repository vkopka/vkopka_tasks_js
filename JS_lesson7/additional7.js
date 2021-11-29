// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }

    viewGeo() {
        console.log(`Geo lat: ${this.lat}  lng: ${this.lng}`);
    }
}

class Address {
    constructor(street, suite, city, zipcode, lat, lng) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = new Geo(lat, lng);
    }

    viewAddress() {
        console.log(`Address - Street: ${this.street}  Suite: ${this.suite}  City: ${this.city} ` +
            ` zipcode: ${this.zipcode}`);
        this.geo.viewGeo();
    }
}

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }

    viewCompany() {
        console.log(`Company name: ${this.name}  Catch phrase: ${this.catchPhrase}  BS: ${this.bs}`);
    }
}

class UserData {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website,
                nameCompany, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = new Address(street, suite, city, zipcode, lat, lng);
        this.company = new Company(nameCompany, catchPhrase, bs);
    }

    viewUserData() {
        console.log(`ID: ${this.id}  full name: ${this.name}  user name: ${this.username}`);
        console.log(`phone: ${this.phone}  email: ${this.email}  website: ${this.website}`);
        this.address.viewAddress();
        this.company.viewCompany();
    }
}

const account = new UserData(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159',
    '81.1496','1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona',
    'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(account);
account.viewUserData();
