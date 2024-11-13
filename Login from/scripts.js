
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = this.username.value;
    const password = this.password.value;

    if (password.length === 9 && /^\d+$/.test(password)) {
        alert('Login successful!'); 
     
    } else {
        document.getElementById('login-error-msg').style.opacity = 1; // Show error message
    }
});


document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const name = this.name.value;
    const dob = this.dob.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const password = this.password.value;

   
    if (password.length === 9 && /^\d+$/.test(password)) {
        alert('Signup successful!');

    } else {
        alert('Password must be exactly 9 digits.');
    }
});


document.getElementById('toggle-form').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-holder').style.display = 'none';
    document.getElementById('signup-holder').style.display = 'block';
});


document.getElementById('toggle-form-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-holder').style.display = 'none';
    document.getElementById('login-holder').style.display = 'block';
});