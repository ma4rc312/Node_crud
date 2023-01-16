import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'


export const Photo = sequelize.define('photos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },

    description: {
        type: DataTypes.STRING
    },

    imagenPath: {
        type: DataTypes.STRING
    },
}, {
        timestamps: false,
    
});