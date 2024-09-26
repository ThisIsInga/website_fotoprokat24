const items = document.querySelectorAll('.menu__items');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('menu__items_activite');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('menu__items_activite');
    });
});