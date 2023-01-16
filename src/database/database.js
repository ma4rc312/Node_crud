import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'pojectNodes',
     'postgres', 
     'password',
     {
    host: 'localhost',	
    dialect: 'postgres',
    
});