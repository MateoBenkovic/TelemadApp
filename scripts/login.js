function login()  {
  const username = document.querySelector('.js-username').value; 
  const password = document.querySelector('.js-password').value; 

  if (username == "username" && password == "password") {
    window.location.href = "records.html";
  } else {
    alert("Wrong username or password!");
  }
}
document.querySelector('.js-password').addEventListener('keypress', function(e) {
  if (e.key === 'Enter'){
    login();
  }
});

