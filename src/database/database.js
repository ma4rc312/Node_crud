import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'pojectNode',
     'postgres', 
     'password',
     {
    host: 'localhost',	
    dialect: 'postgres',
    
});