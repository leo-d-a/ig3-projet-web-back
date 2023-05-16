const Utilisateurs = require('./utilisateurs');
const Eleves = require('./eleves');
const Patients = require('./patients');
const InscriptionsFormations = require('./inscriptionsFormations');
const Formations = require('./formations');
const Avis = require('./avis');
const sequelize = require('../config/database');

// Associations entre les tables
Utilisateurs.hasOne(Eleves, { foreignKey: 'idUtilisateur', allowNull: false, onDelete: 'CASCADE' });
Eleves.belongsTo(Utilisateurs, { foreignKey: 'idUtilisateur' });

Utilisateurs.hasOne(Patients, { foreignKey: 'idUtilisateur', allowNull: false, onDelete: 'CASCADE' });
Patients.belongsTo(Utilisateurs, { foreignKey: 'idUtilisateur' });

Eleves.hasMany(InscriptionsFormations, { foreignKey: 'idEleve', allowNull: false, onDelete: 'CASCADE' });
InscriptionsFormations.belongsTo(Eleves, { foreignKey: 'idEleve' });

Formations.hasMany(InscriptionsFormations, { foreignKey: 'idFormation', allowNull: false, onDelete: 'CASCADE' });
InscriptionsFormations.belongsTo(Formations, { foreignKey: 'idFormation' });

// Association pour la table Avis
Eleves.hasMany(Avis, { foreignKey: 'idEleve', allowNull: false, onDelete: 'CASCADE' });
Avis.belongsTo(Eleves, { foreignKey: 'idEleve' });

Formations.hasMany(Avis, { foreignKey: 'idFormation', allowNull: false, onDelete: 'CASCADE' });
Avis.belongsTo(Formations, { foreignKey: 'idFormation' });

// Synchronisation des tables avec la base de données
sequelize.sync()
  .then(() => console.log('Tables synchronisées'))
  .catch(error => console.log('Erreur lors de la synchronisation:', error));

// Export des modèles
module.exports = {
  Utilisateurs,
  Eleves,
  Patients,
  Formations,
  InscriptionsFormations,
  Avis
};
