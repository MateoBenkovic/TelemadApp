const patients = JSON.parse(localStorage.getItem('patients')) || [];

renderPatients();

function renderPatients() {
  let html = '';

  patients.forEach((patientObject, index) => {
    const { ime, prezime } = patientObject;
    html +=
      `<tr>
        <td>${ime} ${prezime}</td>
        <td></td>
        <td></td>
        <td></td>
        <td><button class="btn btn-secondary" onclick="location.href = 'patient.html';">Prikaži</button></td>
      </tr>`;

  });

  document.querySelector('.js-patients').innerHTML = html;

}







