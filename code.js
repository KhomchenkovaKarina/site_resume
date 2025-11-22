'use strict';

let emailField = document.getElementById('emailField'),
    nameField = document.getElementById('nameField'),
    taskField = document.getElementById('taskField');

function createErrorSpan() { //создание надписи об ошибке
    let errorField = document.createElement('span');
    errorField.classList.add('error');
    errorField.textContent = 'Поле необходимо заполнить';
    return errorField;
}

function addErrorSpan(event, field) { //добавление ошибки (рамка + span)
    event.preventDefault();
    field.classList.add('red-frame');
    if (!field.parentElement.querySelector('.error') ) { //проверка нужен ли span
        field.parentNode.insertBefore(createErrorSpan(), field.nextSibling);
    }
    return `${field} error`;
}

function removeErrorSpan(field) {
    field.classList.remove('red-frame');
    field.parentElement.querySelector('.error').remove();
}

document.getElementsByClassName('order__right')[0].addEventListener('submit', function(event) {
    let errors = [];
    if (nameField.value.trim().length === 0) errors.push(addErrorSpan(event, nameField)); //trim() убирает пробелы в начале и в конце
    if (emailField.value.trim().length === 0) errors.push(addErrorSpan(event, emailField));
    if (taskField.value.trim().length === 0) errors.push(addErrorSpan(event, taskField));
    if (errors.length == 0) return;
})

for (let field of [nameField, emailField, taskField]) { //создаем обработчик событий под каждое поле
    field.addEventListener('click', function() {
        if (field.classList.contains('red-frame')) {
            removeErrorSpan(field);
        }
    })
}
