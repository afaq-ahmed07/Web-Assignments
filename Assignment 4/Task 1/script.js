$(document).ready(function () {
    const nameRegex =/^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const contactRegex = /^\d+$/;
    $('.sign-up-div').hide();
    $('.sign-up').on('click', function (event) {
        event.preventDefault();
        if (!nameRegex.test($('#inputfname').val())) {
            alert('Please enter a valid First Name.');
            return false;
        }
        if (!nameRegex.test($('#inputlname').val())) {
            alert('Please enter a valid Last Name.');
            return false;
        }

        if (!$('#inputDOB').val()) {
            alert('Please enter a valid Date of Birth.');
            return false;
        }

        if (!contactRegex.test($('#inputcontact').val())) {
            alert('Please enter a valid Contact number.');
            return false;
        }

        if (!nameRegex.test($('#inputguser').val())) {
            alert('Please enter a valid Username.');
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


        if ($('#inputCPassword').val() !== $('#inputSPassword').val()) {
            alert('Passwords do not match.');
            return false;
        }

        alert('Form submitted successfully!');
        $('.signUpForm')[0].reset();
        $('.signUpForm')[1].reset();
        return true;
    });
    $('.sign-up-switch').on('click', function (){
        $('.sign-in-div').hide();
        $('.img-div').hide();
        $('.img-content').hide();
        $('.sign-up-div').show();
        ScrollReveal({
            reset: true,
            distance: '100px',
            duration: 2000,
            delay: 200
          });
        
          ScrollReveal().reveal('.sign-up-div', { origin: 'right' });
    });
    $('.sign-in').on('click', function () {
        if (!nameRegex.test($('#inputuser').val())) {
            alert('Please enter a valid Username.');
            return false;
        }
        if (!passwordRegex.test($('#inputPassword').val())) {
            alert('Password must contain at least 8 characters, including a number and a special character.');
            return false;
        }
        alert('Form submitted successfully!');
        $('.signInForm')[0].reset();
        return true;
    });
    $('.back').on('click',function(){
        $('.sign-up-div').hide();
        $('.sign-in-div').show();
        $('.img-div').show();
        $('.img-content').show();
        ScrollReveal({
            reset: true,
            distance: '100px',
            duration: 2000,
            delay: 100
          });
        
          ScrollReveal().reveal('.sign-in-div, .img-div, .img-content', { origin: 'left' });
    });

});
