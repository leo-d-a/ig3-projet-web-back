require('dotenv').config();

const app = require('./app');
const sequelize = require("./config/database");
const port = 3000;


(async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync({alter:true});
        console.log("Database connection successful !");
        app.listen(port,function(){
            console.log(`Live at Port ${port}`);
          });
    } catch (error){
        console.error("Unable to connect to database", error);
    }
})();

