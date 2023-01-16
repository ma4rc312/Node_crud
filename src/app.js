import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/task.routes.js";
import ImgRoutes from './routes/img.routes.js';
import morgan from "morgan";
import path from "path"


const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(projectsRoutes);
app.use(tasksRoutes);

// ruta
app.use('/api', ImgRoutes);

// esta carpeta sera usada para almacenar archivos publicos
app.use('/images', express.static(path.resolve('public')));

export default app;
