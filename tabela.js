const tbody = document.querySelector('tbody');


const createElement = (tag, innerText = '', innerHTML) => {
    const element = document.createElement(tag);
    element.innerText = innerText;

    if (innerText){
        element.innerText = innerText;
    }

    if (innerHTML) {
        element.InnerHTML = innerHTML
    }

    return element;
}

const task = {
    id: 1,
    title: 'Inscreva-se',
    created_at: '00 Janeiro de 2024 00:12',
    status: 'pendente'
}

const createSelect = (value) => {
    const options = `
        <option value="pendente">pendente</option>
        <option value="concluída">concluída</option>
    `;

    const select = createElement('select', '', options);

    select.value = value;

    return select;
}

const creatRow = (task) => {

    const { id, title, created_at, status } = task;

    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreatedAt= createElement('td', created_at);
    const tdStatus = createElement('td');
    const tdActions = createElement('td');

    const select = createSelect(status);

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
    const deleteButton = createElement('button', '', ' <span class="material-symbols-outlined">delete</span>');
    
    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    tdStatus.appendChild(select);

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);
    
    tbody.appendChild(tr);

}

creatRow(task)    