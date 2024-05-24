let button = document.getElementById('button');

let firstName = document.getElementById('name');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
let date = document.getElementById('date');
let adresse = document.getElementById('adresse');
let postal = document.getElementById('postal');
let password = document.getElementById('password');
let password_confirm = document.getElementById('confirm_password');

let regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regex_date = /^\d{4}-\d{1,2}-\d{1,2}$/;

button.addEventListener('click', (event) => {
    event.preventDefault();
    let isValid = true;

    // Clear previous error/success messages
    document.getElementById('succes_name').innerHTML = '';
    document.getElementById('error_name').innerHTML = '';
    document.getElementById('succes_prenom').innerHTML = '';
    document.getElementById('error_prenom').innerHTML = '';
    document.getElementById('succes_email').innerHTML = '';
    document.getElementById('error_email').innerHTML = '';
    document.getElementById('succes_date').innerHTML = '';
    document.getElementById('error_date').innerHTML = '';
    document.getElementById('succes_adresse').innerHTML = '';
    document.getElementById('error_adresse').innerHTML = '';
    document.getElementById('succes_postal').innerHTML = '';
    document.getElementById('error_postal').innerHTML = '';
    document.getElementById('succes_password').innerHTML = '';
    document.getElementById('error_password').innerHTML = '';

    // Validate first name
    if (firstName.value !== "" && firstName.value.length >= 5 && firstName.value.length <= 15) {
        document.getElementById('succes_name').innerHTML = '<img src="./img/verifier.png" width="15" />';
    } else {
        isValid = false;
        if (firstName.value === "") {
            document.getElementById('error_name').innerHTML = '<p class="error">champ vide !</p>';
        } else {
            document.getElementById('error_name').innerHTML = '<p class="error">Le nom doit contenir entre 5 et 15 caractères !</p>';
        }
    }

    // Validate prenom
    if (prenom.value.length >= 5 && prenom.value.length <= 15) {
        document.getElementById('succes_prenom').innerHTML = '<img src="./img/verifier.png" width="15" />';
    } else {
        isValid = false;
        document.getElementById('error_prenom').innerHTML = '<p class="error">Le prénom doit contenir entre 5 et 15 caractères !</p>';
    }

    // Validate email
    if (regex_email.test(email.value)) {
        document.getElementById('succes_email').innerHTML = '<img src="./img/verifier.png" width="15" />';
    } else {
        isValid = false;
        document.getElementById('error_email').innerHTML = '<p class="error">Veuillez entrer une adresse email valide.</p>';
    }

    // Validate date
    if (regex_date.test(date.value)) {
        document.getElementById('succes_date').innerHTML = '<img src="./img/verifier.png" width="15" />';
    } else {
        isValid = false;
        document.getElementById('error_date').innerHTML = '<p class="error">Veuillez entrer une date valide au format AAAA-MM-JJ.</p>';
    }

    // Validate adresse
    if (adresse.value.length >= 5 && adresse.value !== "") {
        document.getElementById('succes_adresse').innerHTML = '<img src="./img/verifier.png" width="15" />';
    } else {
        isValid = false;
        document.getElementById('error_adresse').innerHTML = '<p class="error">L\'adresse doit contenir au moins 5 caractères.</p>';
    }

    // Validate postal code
    if (!isNaN(postal.value) && postal.value !== "") {
        document.getElementById('succes_postal').innerHTML = '<img src="./img/verifier.png" width="15" />';
    } else {
        isValid = false;
        document.getElementById('error_postal').innerHTML = '<p class="error">Veuillez entrer un code postal valide.</p>';
    }

    // Validate password
    if (password.value.length >= 8) {
        document.getElementById('succes_password').innerHTML = '<img src="./img/verifier.png" width="15" />';
    } else {
        isValid = false;
        document.getElementById('error_password').innerHTML = '<p class="error">Le mot de passe doit contenir au moins 8 caractères.</p>';
    }

    // Validate password confirmation
    if (password.value === password_confirm.value) {
        document.getElementById('succes_confirm_password').innerHTML = '<img src="./img/verifier.png" width="15" />';
    } else {
        isValid = false;
        document.getElementById('error_confirm_password').innerHTML = '<p class="error">Les mots de passe ne correspondent pas.</p>';
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Formulaire envoyé !');
    }
});
