import { formatDatetime } from './formatTime.js';

const records = JSON.parse(localStorage.getItem('records')) || [];

renderRecords();

function renderRecords() {
  let html = '';

  records.forEach((recordObject, index) => {
    const { st, dt, puls, opis, vrijeme } = recordObject;
    const timestamp = formatDatetime(vrijeme);
    html +=
      `<tr>
        <td>${timestamp}</td>
        <td>${st}</td>
        <td>${dt}</td>
        <td>${puls}</td>
        <td>${opis}</td>
        <td><button class="btn btn-light js-delete-button" data-record-id="${index}"><img src="images/delete.png" width="24" height="24"></button> </td>
        <td><button class="btn btn-light js-edit-button" data-redor-id="${index}"><img src="images/edit.png" width="24" height="24"></button> </td>
      </tr>`;

  });

  document.querySelector('.js-records').innerHTML = html;

}

document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
  deleteButton.addEventListener('click', () => {
    records.splice(index, 1);
    renderRecords();
    localStorage.setItem('records', JSON.stringify(records));
  });
});





