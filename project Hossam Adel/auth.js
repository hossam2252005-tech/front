document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const validEmail = "hossam@gmail.com";
  const validPassword = "123456";

  if (email === validEmail && password === validPassword) {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'home.html';
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: 'Invalid email or password!',
    });
  }
});