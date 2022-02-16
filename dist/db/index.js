"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("mysql://root:asd123@localhost:3306/mydb");
db.authenticate().then(() => {
    console.log("Connect successfully!");
}).catch((err) => {
    console.log("Error: " + err.message);
});
exports.default = db;
