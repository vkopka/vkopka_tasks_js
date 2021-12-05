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

export {createTagElement, createControlElement, createForm};