function login()  {
  const username = document.querySelector('.js-username').value; 
  const password = document.querySelector('.js-password').value; 

  if (username == "username" && password == "password") {
    window.location.href = "new_record.html";
  } else {
    alert("Wrong username or password!");
  }
}
document.querySelector('.js-password').addEventListener('keypress', function(e) {
  if (e.key === 'Enter'){
    login();
  }
});

