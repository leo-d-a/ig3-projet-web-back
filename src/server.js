require('dotenv').config();

const app = require('./app');
const sequelize = require("./config/database");
const port = 3000;


(async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync({alter: true}).catch(err => console.error(err));
        console.log("- Connexion à la base de données réussie -");
        console.log("- Synchronisation des modèles avec la base de données réussie -");
        app.listen(port,function(){
            console.log(`Connectée au port ${port}`);
          });
    } catch (error){
        console.error("Impossible d'accéder à la base de données...", error);
    }
})();

