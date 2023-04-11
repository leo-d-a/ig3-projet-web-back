const Utilisateurs = require('./utilisateurs')
const Eleves = require('./eleves')
const Patients = require('./patients')
const InscriptionsFormations = require('./inscriptionsFormations')
const Formations = require('./formations')


Utilisateurs.sync({alter : true})
Eleves.sync({alter : true})
Patients.sync({alter : true})
InscriptionsFormations.sync({alter : true})
Formations.sync({alter : true})

module.exports = Utilisateurs
module.exports = Eleves
module.exports = Patients
module.exports = InscriptionsFormations
module.exports = Formations
