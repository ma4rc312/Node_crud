import app from './app.js';
import { sequelize } from './database/database.js' 

import './models/Project.js'
import './models/Task.js'

async function main() {
    try {
        // await sequelize.authenticate(); // intento de conexion
        // console.log('Connection has beeb established seccessfully'); estas dos linasw es para comprobar la conexion
        await sequelize.sync({force: false}) /// hace un asincronización con la bd
        app.listen(3000)
        console.log('Server is listening on port 3000'); // arrancar el servidor

    } catch (error) {
        console.error('unable to connect to the database: ', error);

    }
}

main();