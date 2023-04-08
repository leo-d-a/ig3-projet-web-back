const Utilisateurs = require('./utilisateurs')
const Eleves = require('./eleves')
const Patients = require('./patients')
const InscriptionsFormations = require('./inscriptionsFormations')
const InscriptionsSeances = require('./inscriptionsSeances')
const Formations = require('./formations')
const Seances = require('./seances')


Utilisateurs.sync({alter : true})
Eleves.sync({alter : true})
Patients.sync({alter : true})
InscriptionsFormations.sync({alter : true})
InscriptionsSeances.sync({alter : true})
Formations.sync({alter : true})
Seances.sync({alter : true})

module.exports = Utilisateurs
module.exports = Eleves
module.exports = Patients
module.exports = InscriptionsFormations
module.exports = InscriptionsSeances
module.exports = Formations
module.exports = Seances
