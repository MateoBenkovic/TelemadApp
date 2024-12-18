export function formatDatetime(datetimeString) {
  // Kreiranje datuma iz inputa
  const date = new Date(datetimeString);

  // Ekstrahiranje dijelova datuma i vremena
  const day = String(date.getDate()).padStart(2, '0'); // Dodaj nulu ako je potrebno
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Mjeseci su 0-indeksirani
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Spajanje u željeni format
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export function getYears(dateOfBirth) {
  // Pretvaranje datuma rođenja u objekt Date
  const birthDate = new Date(dateOfBirth);
  
  // Dobivanje trenutnog datuma
  const today = new Date();
  
  // Izračunavanje razlike godina
  let age = today.getFullYear() - birthDate.getFullYear();
  
  // Provjera je li korisnik već proslavio rođendan ove godine
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}