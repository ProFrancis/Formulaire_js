document.addEventListener('DOMContentLoaded', function() {
    // Sélection du bouton de soumission du formulaire
    const button = document.getElementById('button');

    // Sélection des champs du formulaire
    const fields = {
        nom: document.getElementById("name"),
        prenom: document.getElementById("prenom"),
        email: document.getElementById("email"),
        adresse: document.getElementById("adresse"),
        date: document.getElementById("date"),
        postal: document.getElementById("postal"),
        mdp: document.getElementById("password"),
        verif_mdp: document.getElementById("confirm_password")
    };

    // Sélection des éléments pour afficher les messages de succès et d'erreur
    const messages = {
        success: {
            nom: 'succes_name',
            prenom: 'succes_prenom',
            email: 'succes_email',
            adresse: 'succes_adresse',
            date: 'succes_date',
            postal: 'succes_postal',
            mdp: 'succes_password',
            verif_mdp: 'succes_confirm_password'
        },
        error: {
            nom: 'error_name',
            prenom: 'error_prenom',
            email: 'error_email',
            adresse: 'error_adresse',
            date: 'error_date',
            postal: 'error_postal',
            mdp: 'error_password',
            verif_mdp: 'error_confirm_password'
        }
    };

    // Fonction pour réinitialiser les messages de succès et d'erreur
    const resetMessages = () => {
        // Réinitialise les messages de succès
        Object.values(messages.success).forEach(id => document.getElementById(id).innerHTML = '');
        // Réinitialise les messages d'erreur
        Object.values(messages.error).forEach(id => document.getElementById(id).innerHTML = '');
    };

    // Fonction pour valider un champ donné par sa longueur minimale et maximale
    const validateField = (field, minLength, maxLength) => {
        if (fields[field].value !== "" && fields[field].value.length >= minLength && fields[field].value.length <= maxLength) {
            // Affiche un message de succès si la validation passe
            document.getElementById(messages.success[field]).innerHTML = `<p>✔</p>`;
        } else {
            // Affiche un message d'erreur si la validation échoue
            document.getElementById(messages.error[field]).innerHTML = `<p>Erreur ${field}</p>`;
        }
    };

    // Fonction pour valider l'adresse email
    const validateEmail = () => {
        // Expression régulière pour valider le format de l'email
        const regex_email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (regex_email.test(fields.email.value.trim())) {
            // Affiche un message de succès si l'email est valide
            document.getElementById(messages.success.email).innerHTML = `<p>✔</p>`;
        } else {
            // Affiche un message d'erreur si l'email est invalide
            document.getElementById(messages.error.email).innerHTML = `<p>Erreur email</p>`;
        }
    };

    // Fonction pour valider les mots de passe et leur confirmation
    const validatePasswords = () => {
        if (fields.mdp.value.length >= 8) {
            if (fields.mdp.value === fields.verif_mdp.value) {
                // Affiche un message de succès si le mot de passe et sa confirmation sont valides
                document.getElementById(messages.success.mdp).innerHTML = `<p>✔</p>`;
                document.getElementById(messages.success.verif_mdp).innerHTML = `<p>✔</p>`;
            } else {
                // Affiche un message d'erreur si la confirmation du mot de passe échoue
                document.getElementById(messages.error.verif_mdp).innerHTML = `<p>Les mots de passe ne correspondent pas.</p>`;
            }
        } else {
            // Affiche un message d'erreur si le mot de passe est trop court
            document.getElementById(messages.error.mdp).innerHTML = `<p>Le mot de passe doit contenir au moins 8 caractères.</p>`;
        }
    };

    // Ajout d'un événement click au bouton de soumission du formulaire
    button.addEventListener('click', (event) => {
        // Empêche l'envoi du formulaire
        event.preventDefault();

        // Réinitialise les messages
        resetMessages();

        // Valide chaque champ
        validateField('nom', 5, 15);
        validateField('prenom', 5, 15);
        validateEmail();
        validateField('adresse', 5, Infinity);
        validateField('date', 1, Infinity);
        validateField('postal', 1, Infinity);
        validatePasswords();
    });
});
