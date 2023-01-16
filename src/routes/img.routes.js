import { Router } from "express";
import {
  crearPhoto,
  getPhotos,
  getPhotoId,
  updatePhoto,
  deletePhoto,
} from "../controllers/photo.controller.js";
import multer from "../libs/multer.js";

const router = Router();

router.route("/photos").post(multer.single("image"), crearPhoto).get(getPhotos);
router.route("/photos/:id", getPhotoId)
.put(updatePhoto)
.delete(deletePhoto);

export default router;
