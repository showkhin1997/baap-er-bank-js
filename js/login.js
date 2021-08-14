document.getElementById('button-submit').addEventListener('click', function () {
    // email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;


    // password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // check eamil and password
    if (userEmail == "showkhin@gmail.com" && userPassword == "123456") {
        window.location.href = 'banking.html';
    }
});

