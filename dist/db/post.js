"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostInstance = void 0;
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db"));
class PostInstance extends sequelize_1.Model {
}
exports.PostInstance = PostInstance;
PostInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    sequelize: db_1.default,
    tableName: 'todos',
});
