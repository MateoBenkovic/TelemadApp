const patients = JSON.parse(localStorage.getItem('patients')) || [];

function addUser() {
  const mb = document.querySelector('.js-mb').value;
  const ime = document.querySelector('.js-ime').value;
  const prezime = document.querySelector('.js-prezime').value;
  const datumRodjenja = document.querySelector('.js-datum-rodjenja').value;
  const adresa = document.querySelector('.js-adresa').value;
  const pb = document.querySelector('.js-pb').value;
  const grad = document.querySelector('.js-grad').value;
  const kontakt = document.querySelector('.js-kontakt').value;
  const email = document.querySelector('.js-email').value;
  const username = document.querySelector('.js-username').value;
  const lozinka = document.querySelector('.js-lozinka').value;
  const spol = document.querySelector('input[name="spol"]:checked').value;

  patients.push({ mb: mb, ime: ime, prezime: prezime, datumRodjenja: datumRodjenja, adresa: adresa, pb: pb, grad: grad, kontakt: kontakt, email: email, username: username, lozinka: lozinka, spol: spol });
  localStorage.setItem('patients', JSON.stringify(patients));
  console.log(patients);
  window.location.href = 'patients.html';
}