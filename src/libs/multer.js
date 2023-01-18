// import app from './app.js';
import multer from "multer";
const { router } = "pkg";
import express from "express";
import { v4 as uuidv4 } from 'uuid';
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// middlewares
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/images'),
    filename: (req, file, cb) => { 
        //  cb(null, file.originalname); ----> guarde los archivos con el nombre original
        cb(null, uuidv4() + path.extname(file.originalname) // guarde la img con id aleatorio y su extension
        .toLocaleLowerCase()); //pase a minusculas
    }
});

app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/images'),
    limits: {fileSize: 1000000}, //tamaño de la img MB 
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/; //Tipo de img q quiero
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));

        if (mimetype && extname) {
            return cb(null, true);
        }

        cb("Error: El archivo debe ser una img valida");
    }
}).single('image'));

// archivos estaticos  (para q la carpeta pueda ser accedida desde el navegador)
app.use(express.static(path.join(__dirname, 'public')));

export default ({router});

