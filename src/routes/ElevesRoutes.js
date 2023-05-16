const express = require('express')
const router = express.Router()

// Routes pour tous les élèves 
router.route("/eleves")
    .get(getAllEleves) // obtenir tous les élèves
    .post(createEleve) // créer un nouvel élève


router.route("/eleves/:id_utilisateur")
    .get(getEleveByIdUtilisateur) // obtenir un élève par son id_utilisateur
    .put(updateEleveByIdUtilisateur) // mettre à jour un élève par son id_utilisateur
    .delete(deleteEleveByIdUtilisateur) // supprimer un élève par son id_utilisateur


// Routes pour trier les eleves par niveau_actuel
router.route("/eleves/niveau_actuel/:niveau_actuel")
    .get(getAllElevesByNiveauActuel) // obtenir tous les élèves ayant un certain niveau_actuel
    .get(getAllElevesByNiveauActuelAscending) // obtenir tous les élèves ayant un certain niveau_actuel
    .get(getAllElevesByNiveauActuelDescending) // obtenir tous les élèves ayant un certain niveau_actuel

    // mettre à jour le niveau_actuel d'un élève par son id_utilisateur
router.route("/eleves/:id_utilisateur/niveau_actuel/:niveau_actuel")
    .put(updateNiveauActuelByIdUtilisateur)

//getAllElevesSortedByCreationDate
router.route("/eleves/sort/creation_date")
    .get(getAllElevesSortedByCreationDate)

    //getAllElevesSortedByUpdateDate
router.route("/eleves/sort/update_date")
    .get(getAllElevesSortedByUpdateDate)







