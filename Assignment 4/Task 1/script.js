$(document).ready(function () {

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const contactRegex = /^\d+$/;

    $('button[type="submit"]').on('click', function (event) {
        event.preventDefault();

        if (!nameRegex.test($('#inputfname').val())) {
            alert('Please enter a valid First Name.');
            return false;
        }

        if (!$('#inputDOB').val()) {
            alert('Please enter a valid Date of Birth.');
            return false;
        }

        if (!emailRegex.test($('#inputEmail').val())) {
            alert('Please enter a valid Email address.');
            return false;
        }

        if (!passwordRegex.test($('#inputSPassword').val())) {
            alert('Password must contain at least 8 characters, including a number and a special character.');
            return false;
        }

        if (!nameRegex.test($('#inputlname').val())) {
            alert('Please enter a valid Last Name.');
            return false;
        }

        if (!contactRegex.test($('#inputcontact').val())) {
            alert('Please enter a valid Contact number.');
            return false;
        }

        if (!$('#inputaddress').val()) {
            alert('Please enter a valid Address.');
            return false;
        }

        if ($('#inputCPassword').val() !== $('#inputSPassword').val()) {
            alert('Passwords do not match.');
            return false;
        }

        alert('Form submitted successfully!');
        $('.signUpForm')[0].reset();
        $('.signUpForm')[1].reset();
        return true;
    });
});
