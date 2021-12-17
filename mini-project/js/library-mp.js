// url API
const url = 'https://jsonplaceholder.typicode.com/';
// Local storage user ID
const userId = 'miniProjectUserId';

// Check Objects
const checkObjects = (obj1, obj2) => {
    return Object.keys(obj1).some(value => obj1[value] !== obj2[value]);
};

// Local Storage functions
const loadLocalStorage = (idBest) => {
    return JSON.parse(localStorage.getItem(idBest)) || [];
};

const saveLocalStorage = (idBest, values) => {
    localStorage.setItem(idBest, JSON.stringify(values));
};

// Form
const createForm = (name = '', action = '#', method = 'post', fElement= undefined) => {
    let element = document.createElement('form');
    element.action = action;
    element.method = method;
    element.name = name;

    if (typeof fElement === "undefined") {
        element = document.body.appendChild(element);
    } else {
        element = fElement.appendChild(element);
    }

    return element;
};

// Tag element
const createTagElement = (tag, nameClass = '', id = '', text = '',
                          pElement = undefined) => {
    let element = document.createElement(tag);
    element.style.textAlign = 'justify';
    if (nameClass !== '') {
        element.classList.add(nameClass);
    }
    if (id !== '') {
        element.id = id;
    }
    if (text !== '') {
        element.innerText = text;
    }
    if (typeof pElement === "undefined") {
        element = document.body.appendChild(element);
    } else {
        element = pElement.appendChild(element);
    }

    return element;
};

// Control element
const createControlElement = (tag, type, value = '', name = '',  pElement = undefined) => {
    let element = document.createElement(tag);

    element.type = type;

    if (name !== '') {
        element.name = name;
    }

    element.value = value;

    if (typeof pElement === "undefined") {
        element = document.body.appendChild(element);
    } else {
        element = pElement.appendChild(element);
    }

    return element;
};

export {
    loadLocalStorage, saveLocalStorage, checkObjects, createForm, createTagElement, createControlElement,
    url, userId
};
