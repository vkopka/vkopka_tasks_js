// - Описати код, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
document.addEventListener('click', function (event) {
    const target = event.target;
    // console.log(event);
    // target.classList.value
    // target.id
    // offsetLeft: 8
    // offsetTop: 61
    // offsetHeight: 17
    // offsetWidth: 94
    console.log('Tag:     ', target.tagName);
    console.log('Classes: ', target.classList.value);
    console.log('Id:      ', target.id);
    console.log('Height:  ', target.offsetHeight);
    console.log('Width:   ', target.offsetWidth);
    console.log('----------------------------------');
});
