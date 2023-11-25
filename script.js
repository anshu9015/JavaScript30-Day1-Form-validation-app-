function validateUsername() {
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    const usernameRegex = /^[A-Za-z0-9]+$/;

    if (usernameInput.value.length > 20 || !usernameRegex.test(usernameInput.value)) {
        usernameError.textContent = 'Username should not be more than 20 characters and should not contain special characters.';
        usernameInput.focus();
    } else {
        usernameError.textContent = '';
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*~])(?!.*\s).{8,20}$/;

    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Password must meet the specified criteria.';
        passwordInput.focus();
    } else {
        passwordError.textContent = '';
    }
}

function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameRegex = /^[A-Za-z ]+$/;

    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = 'Name should only contain letters and spaces.';
        nameInput.focus();
    } else {
        nameError.textContent = '';
    }
}

function validatePostalCode() {
    const postalCodeInput = document.getElementById('postalCode');
    const postalCodeError = document.getElementById('postalCodeError');
    const postalCodeRegex = /^[0-9]{6}$/;

    if (!postalCodeRegex.test(postalCodeInput.value)) {
        postalCodeError.textContent = 'Invalid postal code. It should be a 6-digit number.';
        postalCodeInput.focus();
    } else {
        postalCodeError.textContent = '';
    }
}

function validateArea() {
    const areaInput = document.getElementById('area');
    const areaError = document.getElementById('areaError');
    const areaRegex = /^[^!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]+$/;

    if (!areaRegex.test(areaInput.value)) {
        areaError.textContent = 'Area should not contain special characters.';
        areaInput.focus();
    } else {
        areaError.textContent = '';
    }
}

function validateAddress() {
    // Validation for Address can be skipped since it allows all characters.
    const addressError = document.getElementById('addressError');
    addressError.textContent = '';
}

function validateContactNumber() {
    const contactNumberInput = document.getElementById('contactNumber');
    const contactNumberError = document.getElementById('contactNumberError');
    const contactNumberRegex = /^\d{10}$/;

    if (!contactNumberRegex.test(contactNumberInput.value)) {
        contactNumberError.textContent = 'Invalid contact number. It should have 10 digits.';
        contactNumberInput.focus();
    } else {
        contactNumberError.textContent = '';
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email address.';
        emailInput.focus();
    } else {
        emailError.textContent = '';
    }
}

function validatePhoto() {
    const photoInput = document.getElementById('photo');
    const photoError = document.getElementById('photoError');

    if (photoInput.files.length === 0) {
        photoError.textContent = 'Please upload a photo.';
        photoInput.focus();
    } else if (photoInput.files[0].size > 2 * 1024 * 1024) {
        photoError.textContent = 'Photo size should not exceed 2MB.';
        photoInput.value = '';  // Clear the file input
        photoInput.focus();
    } else {
        photoError.textContent = '';
    }
}

function validateGender() {
    const genderInput = document.getElementById('gender');
    const genderError = document.getElementById('genderError');

    if (genderInput.value === "") {
        genderError.textContent = 'Please select a gender.';
        genderInput.focus();
    } else {
        genderError.textContent = '';
    }
}

function validateAge() {
    const ageInput = document.getElementById('age');
    const ageError = document.getElementById('ageError');

    if (isNaN(ageInput.value) || ageInput.value <= 0) {
        ageError.textContent = 'Invalid age.';
        ageInput.focus();
    } else {
        ageError.textContent = '';
    }
}

function validateForm() {
    // Additional logic to check if all fields are valid before form submission
    // Return true to submit the form, or false to prevent submission
    return true;
}