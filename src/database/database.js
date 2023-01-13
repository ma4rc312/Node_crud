import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'poyectoNode',
     'postgres', 
     'password',
     {
    host: 'localhost',	
    dialect: 'postgres',
    
});