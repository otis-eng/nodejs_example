import {Sequelize} from "sequelize";

const db = new Sequelize("postgresql://uhquopzvbrlfkilwko2f:5JtY1lUCsM0wkrxctALJ@bpcieaj1lwlic1qhrpvv-postgresql.services.clever-cloud.com:5432/bpcieaj1lwlic1qhrpvv");

db.authenticate().then(()=>{
    console.log("Connect successfully!");
}).catch((err)=>{
    console.log("Error: "+err.message);
});


export default db;