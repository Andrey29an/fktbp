const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const sortButton = document.getElementById('sortButton');
const list = document.getElementById('list');

let items = JSON.parse(localStorage.getItem('items')) || [];

function renderList() {
    list.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => removeItem(index));
        list.appendChild(li);
    });
}

function addItem() {
    const newItem = inputField.value.trim();
    if (newItem) {
        items.push(newItem);
        inputField.value = '';
        saveItems();
        renderList();
    }
}

function removeItem(index) {
    items.splice(index, 1);
    saveItems();
    renderList();
}

function sortItems() {
    items.sort();
    saveItems();
    renderList();
}

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

addButton.addEventListener('click', addItem);
sortButton.addEventListener('click', sortItems);

renderList();