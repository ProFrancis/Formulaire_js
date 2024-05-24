class FormValidator {
    constructor() {
      // Sélection des champs du formulaire
      this.fields = {
        nom: document.getElementById("name"),
        prenom: document.getElementById("prenom"),
        email: document.getElementById("email"),
        date: document.getElementById("date"), // Ajout du champ Date de Naissance
        adresse: document.getElementById("adresse"),
        postal: document.getElementById("postal"), // Ajout du champ Code Postal
        mdp: document.getElementById("password"),
        verif_mdp: document.getElementById("confirm_password")
    };
    
    this.messages = {
        success: {
            nom: 'succes_name',
            prenom: 'succes_prenom',
            email: 'succes_email',
            date: 'succes_date', // Ajout du message de succès pour Date de Naissance
            adresse: 'succes_adresse',
            postal: 'succes_postal', // Ajout du message de succès pour Code Postal
            mdp: 'succes_password',
            verif_mdp: 'succes_confirm_password'
        },
        error: {
            nom: 'error_name',
            prenom: 'error_prenom',
            email: 'error_email',
            date: 'error_date', // Ajout du message d'erreur pour Date de Naissance
            adresse: 'error_adresse',
            postal: 'error_postal', // Ajout du message d'erreur pour Code Postal
            mdp: 'error_password',
            verif_mdp: 'error_confirm_password'
        }
    };
      // Ajout d'un événement click au bouton de soumission du formulaire
      document.getElementById('button').addEventListener('click', (event) => this.handleSubmit(event));
    }
  
    // Fonction pour réinitialiser les messages de succès et d'erreur
    resetMessages() {
      // Réinitialise les messages de succès
      Object.values(this.messages.success).forEach(id => document.getElementById(id).innerHTML = '');
      // Réinitialise les messages d'erreur
      Object.values(this.messages.error).forEach(id => document.getElementById(id).innerHTML = '');
    }
  
    // Fonction pour valider un champ donné par sa longueur minimale et maximale
    validateField(field, minLength, maxLength) {
      const value = this.fields[field].value;
      if (value && value.length >= minLength && value.length <= maxLength) {
        // Affiche un message de succès si la validation passe
        this.showSuccess(field);
      } else {
        // Affiche un message d'erreur si la validation échoue
        this.showError(field, `Erreur ${field}`);
      }
    }
  
    // Fonction pour valider l'adresse email
    validateEmail() {
      const email = this.fields.email.value.trim();
      // Expression régulière pour valider le format de l'email
      const regex_email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (regex_email.test(email)) {
        // Affiche un message de succès si l'email est valide
        this.showSuccess('email');
      } else {
        // Affiche un message d'erreur si l'email est invalide
        this.showError('email', 'Erreur email');
      }
    }
  
    // Fonction pour valider les mots de passe et leur confirmation
    validatePasswords() {
      const password = this.fields.mdp.value;
      const confirmPassword = this.fields.verif_mdp.value;
  
      if (password.length >= 8) {
        // Affiche un message de succès si le mot de passe a la longueur minimale requise
        this.showSuccess('mdp');
        if (password === confirmPassword) {
          // Affiche un message de succès si les mots de passe correspondent
          this.showSuccess('verif_mdp');
        } else {
          // Affiche un message d'erreur si les mots de passe ne correspondent pas
          this.showError('verif_mdp', 'Les mots de passe ne correspondent pas.');
        }
      } else {
        // Affiche un message d'erreur si le mot de passe est trop court
        this.showError('mdp', 'Le mot de passe doit contenir au moins 8 caractères.');
      }
    }
  
    // Fonction pour afficher un message de succès pour un champ donné
    showSuccess(field) {
      document.getElementById(this.messages.success[field]).innerHTML = `<p>✔</p>`;
    }
  
    // Fonction pour afficher un message d'erreur pour un champ donné
    showError(field, errorMessage) {
      document.getElementById(this.messages.error[field]).innerHTML = `<p>${errorMessage}</p>`;
    }
  
    // Fonction pour gérer la soumission du formulaire
    handleSubmit(event) {
      // Empêche l'envoi par défaut du formulaire
      event.preventDefault();
  
      // Réinitialise les messages
      this.resetMessages();
  
      // Valide chaque champ
      this.validateField('nom', 5, 15);
      this.validateField('prenom', 5, 15);
      this.validateEmail();
      this.validatePasswords();
    }
  }
  
  // Initialisation de la validation du formulaire lorsque le DOM est entièrement chargé
  document.addEventListener('DOMContentLoaded', () => {
    new FormValidator();
  });
  