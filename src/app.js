import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/task.routes.js";
import imgRoutes from "./routes/img.routes.js";
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(projectsRoutes); 

 



app.use(tasksRoutes);
app.use(imgRoutes);


app.set('views', path.join(__dirname, 'views')); // indicar donde esta la carpeta 
app.set('view engine', 'ejs'); // motor de platillas

// archivos estaticos  (para q la carpeta pueda ser accedida desde el navegador)
app.use(express.static(path.join(__dirname, 'public')));


export default app;
