let person = {
    personName: 'vasya',
    surname: 'pupkin',
    getFullName: function () {
        console.log(this);
        return this.personName + ' ' + this.surname;
    },
    wife: {
        name: 'anna',
        greeting: function (msg) {
            console.log(`${msg} my name is ${this.name}`);

        }
    }
};
console.log(person.getFullName());
console.log(person);
person.wife.greeting('hello!!! ');