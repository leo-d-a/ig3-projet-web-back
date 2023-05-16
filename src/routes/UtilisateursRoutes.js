const express = require('express')
const router = express.Router()

// Routes pour tous les utilisateurs
router.route("/utilisateurs")
    .get(getAllUtilisateurs) // obtenir tous les utilisateurs
    .post(createUtilisateur) // créer un nouvel utilisateur

// Routes pour un utilisateur spécifique
router.route("/utilisateurs/:id")
    .get(getUtilisateurById) // obtenir un utilisateur par son id
    .put(updateUtilisateurById) // mettre à jour un utilisateur par son id
    .delete(deleteUtilisateurById) // supprimer un utilisateur par son id