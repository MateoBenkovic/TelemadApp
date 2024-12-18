const records = JSON.parse(localStorage.getItem('records')) || [];

function addTodoToTable() {
  const st = document.querySelector('.js-st').value;
  const dt = document.querySelector('.js-dt').value;
  const puls = document.querySelector('.js-puls').value;
  const opis = document.querySelector('.js-opis').value;
  const vrijeme = document.querySelector('.js-vrijeme').value;

  records.push({ st: st, dt: dt, puls: puls, opis: opis, vrijeme: vrijeme });
  localStorage.setItem('records', JSON.stringify(records));
  console.log(records);
  window.location.href = 'records.html';
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar-menu');
  sidebar.classList.toggle('active');
}