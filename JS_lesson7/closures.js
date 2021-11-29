let balanceDefault = 100;
let transactionLimitDefault = 100;
let taxes = 0.5;  // console.log(250 * taxes/100);
let maxCountCards = 3;
// const isArray = function (subj) {
//     return (!!subj) && (subj.constructor === Array);
// };

const isNumber = function (subj) {
    return typeof subj === "number" && subj > 0;
};

const consoleError = (codeError) => {
    if (typeof referenceErrors[codeError] === "string") {
        console.log('Error code: ' + codeError + ' - ' + referenceErrors[codeError]);
    } else {
        console.log('Unknown error code.');
    }
};

class Operation {
    constructor(operationCode, credits) {
        this.operationType = operationTypes[operationCode];
        this.credits = credits;
        this.operationTime = new Date().toLocaleString();
    }

    operationToLog() {
        console.log(`Operation: ${this.operationType}  credits: ${this.credits} Time: ${this.operationTime}`);
    }
}

const operationTypes = [
    'Received credits',         // 0
    'Withdrawal of credits',    // 1
    'Transaction limit change'  // 2
];

const referenceErrors = {
    1: 'Invalid number format.',
    2: 'There are not enough funds on the card.',
    3: 'The amount exceeds the transaction limit.',
    4: 'The card object is not specified.',
    5: `The number of cards is limited to ${maxCountCards}.`
};

class UserCard {
    constructor(key) {
        this.key = key;
        this.balance = balanceDefault;
        this.transactionLimit = transactionLimitDefault;
        this.historyLogs = [];
    }

    getCardOptions() {
        const obj = {};
        for (const property in this) {
            obj[property] = this[property];
        }
        return obj;
    }

    setTransactionLimit(value) {
        if (isNumber(value)) {
            this.transactionLimit = value;
            this.historyLogs.push(new Operation(2, value));
        } else {
            consoleError(1);
        }
    }

    putCredits(value) { // Ця функція отримує певну кількість грошей і заповнює баланс карти
        if (isNumber(value)) {
            this.balance += value;
            this.historyLogs.push(new Operation(0, value));
            this.historyLogs[this.historyLogs.length - 1].operationToLog();
        } else {
            consoleError(1);
        }
    }

    takeCredits(value) {
        if (isNumber(value)) {
            if (value > this.balance) {
                consoleError(2);
            } else if (value > this.transactionLimit) {
                consoleError(3);
            } else {
                this.balance -= value;
                this.historyLogs.push(new Operation(1, value));
                this.historyLogs[this.historyLogs.length - 1].operationToLog();
            }
        } else {
            consoleError(1);
        }
    }

    transferCredits(value, toCard) {
        if (isNumber(value)) {
            if (toCard instanceof UserCard) {
                let tax = value * taxes / 100;
                if (value + tax > this.balance) {
                    consoleError(2);
                } else if (value > this.transactionLimit) {
                    consoleError(3);
                } else {
                    this.takeCredits(value + tax);  // take this card:  value + tax
                    toCard.putCredits(value); // put toCard: value
                }
            } else {
                consoleError(4);
            }
        } else {
            consoleError(1);
        }
    }
}

class UserAccount {
    constructor(userName) {
        this.userName = userName;
        this.cards = [];
        this.countCards = 0;
    }

    addCard() {
        if (maxCountCards > this.countCards) {
            this.countCards += 1;
            this.cards.push(new UserCard(this.countCards));
        } else {
            consoleError(5);
        }
    }

    getCardByKey(key) {
        let obj = {};

        if (this.cards.length > 0) {
            obj = this.cards.find(element => element.key === key);
        }

        return obj;
    }
}

const user = new UserAccount('Bob');
console.log(`Account: ${user.userName}`);

user.addCard();
user.addCard();

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
