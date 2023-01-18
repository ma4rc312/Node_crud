import { Router } from "express";
import { getPhotos, crearPhoto } from "../controllers/photo.controller.js";
import multer from "../libs/multer.js";

const router = Router();

router.get('/photos', getPhotos);
router.post('/photos', crearPhoto);



export default router;
