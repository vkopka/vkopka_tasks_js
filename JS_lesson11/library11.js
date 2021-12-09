const loadLocalStorage = (idBest) => {
    return JSON.parse(localStorage.getItem(idBest)) || [];
};

const saveLocalStorage = (idBest, values) => {
    localStorage.setItem(idBest, JSON.stringify(values));
};

const checkObjects = (obj1, obj2) => {
    return Object.keys(obj1).some(value => obj1[value] !== obj2[value]);
};

export {loadLocalStorage, saveLocalStorage, checkObjects};
