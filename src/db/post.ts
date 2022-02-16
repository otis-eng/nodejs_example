import { Model,DataTypes } from 'sequelize';
import db from "../db";

export interface PostAttributes{
    id:number;
    title:string;
    content:string;
}

export class PostInstance extends Model<PostAttributes> {}

PostInstance.init(
    {
		id: {
			type: DataTypes.NUMBER,
			primaryKey: true,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        content:{
            type: DataTypes.STRING,
        }
	},
	{
		timestamps:false,
		sequelize: db,
		tableName: 'post',
	}

);