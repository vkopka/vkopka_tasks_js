// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive() - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info() - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function CarObject (model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = '';

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.customInfo = function () {
        console.log('Model            -  ' + this.model);
        console.log('Manufacturer     -  ' + this.manufacturer);
        console.log('Year manufacture -  ' + this.year);
        console.log('Max speed        -  ' + this.maxSpeed);
        console.log('Engine capacity  -  ' + this.engineCapacity);
        if (this.driver !== '') {
            console.log('Driver           -  ' + this.driver);
        }
    }

    this.info = function () {
        for (const property in this) {
            if (typeof this[property] !== "function") {
                console.log(property + ' - ' + this[property]);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let myCar = new CarObject('Ferrari Roma', 'FIAT Group', 2020, 320, 3.9);
myCar.customInfo();
console.log('----------------------');
myCar.addDriver('Viktor');
myCar.increaseMaxSpeed(-120);
myCar.changeYear(2019);
myCar.info();
myCar.drive();
console.log('----------------------');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, manufacturer, yearManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearManufacture = yearManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = '';
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    customInfo() {
        console.log('Model            - ' + this.model);
        console.log('Manufacturer     - ' + this.manufacturer);
        console.log('Year manufacture - ' + this.yearManufacture);
        console.log('Max speed        - ' + this.maxSpeed);
        console.log('Engine capacity  - ' + this.engineCapacity);
        if (this.driver !== '') {
            console.log('Driver           - ' + this.driver);
        }
    }

    info() {
        for (const property in this) {
            console.log(property + ' - ' + this[property]);
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.yearManufacture = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let myNewCar = new Car('Ferrari Roma', 'FIAT Group', 2020, 320, 3.9);
myNewCar.customInfo();
console.log('----------------------');
myNewCar.changeYear(2019);
myNewCar.increaseMaxSpeed(-120);
myNewCar.addDriver('Viktor');
myNewCar.info();
myNewCar.drive();
console.log('----------------------');

// - створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
let arrayNames = [
    'Alice', 'Colin', 'Tamara', 'Maggi', 'Sofi (Chosen)',
    'Bobby', 'Lola', 'Casandra', 'Penelopa', 'Diana'];
let arrayAges = [11, 22, 18, 40, 19, 30, 15, 21, 20, 55];
let arraySizes = [6, 12, 9, 11, 7, 9, 8, 8, 9, 11];

class Cinderella {
    constructor(nameGirl, age, footSize) {
        this.nameGirl = nameGirl;
        this.age = age;
        this.footSize = footSize;
    }
    viewCinderella () {
        console.log(`Name: ${this.nameGirl}  Age: ${this.age}  Foot size: ${this.footSize}`);
    }
}

let arrayCinderellas = [];

for (let i = 0; i < 10; i++) {
    arrayCinderellas[i] = new Cinderella(arrayNames[i], arrayAges[i], arraySizes[i]);
    arrayCinderellas[i].viewCinderella();
}
console.log('----------------------');

// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(nameMajesty, age, lostShoeSize) {
        this.nameMajesty = nameMajesty;
        this.age = age;
        this.lostShoeSize = lostShoeSize;
    }

    viewPrince () {
        console.log(`Prince: ${this.nameMajesty}  Age: ${this.age}  Lost shoe size: ${this.lostShoeSize}`);
    }
}

let ourPrince = new Prince('Andy', 22, 7);
ourPrince.viewPrince();
console.log('----------------------');

//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const girl of arrayCinderellas) {
    if (girl.footSize === ourPrince.lostShoeSize) {
        girl.viewCinderella();
    }
}
console.log('----------------------');

//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного отримання
let chosenCinderella = arrayCinderellas.find(value => value.footSize === ourPrince.lostShoeSize);
if (typeof chosenCinderella === "object") {
    chosenCinderella.viewCinderella();
}
