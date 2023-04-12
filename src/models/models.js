const Utilisateurs = require('./utilisateurs')
const Eleves = require('./eleves')
const Patients = require('./patients')
const InscriptionsFormations = require('./inscriptionsFormations')
const Formations = require('./formations')
const InscriptionsSeances = require('./inscriptionsSeances')
const Seances = require('./seances')

//Clé étrangère Utilisateurs / Eleves
Utilisateurs.hasOne(Eleves, {foreignKey: 'id_utilisateur', allowNull: false, onDelete: 'CASCADE'})
Eleves.belongsTo(Utilisateurs, {foreignKey: 'id_utilisateur'})

//Clé étrangère Utilisateurs / Patients
Utilisateurs.hasOne(Patients, {foreignKey: 'id_utilisateur', allowNull: false, onDelete: 'CASCADE'})
Patients.belongsTo(Utilisateurs, {foreignKey: 'id_utilisateur'})

//Clé étrangère Eleves / InscriptionsFormations
Eleves.hasMany(InscriptionsFormations, {foreignKey: 'id_eleve', allowNull: false, onDelete: 'CASCADE'})
InscriptionsFormations.belongsTo(Eleves, {foreignKey: 'id_eleve'})

//Clé étrangère Formations / InscriptionsFormations
Formations.hasMany(InscriptionsFormations, {foreignKey: 'id_formation', allowNull: false, onDelete: 'CASCADE'})
InscriptionsFormations.belongsTo(Formations, {foreignKey: 'id_formation'});

//Clé étrangère Patients / InscriptionsSeances
Patients.hasMany(InscriptionsSeances, {foreignKey: 'id_patient', allowNull: false, onDelete: 'CASCADE'})
InscriptionsSeances.belongsTo(Patients, {foreignKey: 'id_patient'});

//Clé étrangère Seances / InscriptionsSeances
Seances.hasMany(InscriptionsSeances, {foreignKey: 'id_seance', allowNull: false, onDelete: 'CASCADE'})
InscriptionsSeances.belongsTo(Seances, {foreignKey: 'id_seance'});

Utilisateurs.sync({alter : true}).then(() => {
    console.log('Table Utilisateurs créée')
    Patients.sync({alter : true}).then(() => {
        console.log('Table Patients créée')
        Formations.sync({alter : true}).then(() => {
            console.log('Table Formations créée')
            Eleves.sync({alter : true}).then(() => {
                console.log('Table Eleves créée')
                InscriptionsFormations.sync({alter : true}).then(() => {
                    console.log('Table InsriptionsFormations créée')
                    InscriptionsSeances.sync({alter : true}).then(() => {
                        console.log('Table InscriptionsSeances créée')
                        Seances.sync({alter : true}).then(() => {
                            console.log('Table Seances créée')
                        })
                    })
                })
            })
        })
    })
})



module.exports = {Utilisateurs, Eleves, Patients, InscriptionsFormations, Formations, InscriptionsSeances, Seances}
