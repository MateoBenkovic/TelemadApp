import { getYears } from "./formatTime.js";
const patients = JSON.parse(localStorage.getItem('patients')) || [];

renderPatients();

function renderPatients() {
  let html = '';

  patients.forEach((patientObject, index) => {
    if (index == 0) {
      const { mb, ime, prezime, datumRodjenja, adresa, pb, grad, kontakt, email, username, lozinka } = patientObject;
      const godine = getYears(datumRodjenja);
    html +=
     `<div class="col-md-8">
            <h2>${ime} ${prezime}</h2>
      </div>
      <div class="col-md-4 text-end">
        <p class="mb-1">MB: ${mb}</p>
        <p class="mb-1">${adresa}, ${pb} ${grad}</p>
        <p class="mb-1">${godine} godine</p>
        <p class="mb-1">${kontakt}</p>
        <p class="mb-1">${email}</p>
        <button class="btn btn-secondary btn-sm">Uredi podatke</button>
      </div>`;
    }
    

  });

  document.querySelector('.js-patient-data').innerHTML = html;

}







