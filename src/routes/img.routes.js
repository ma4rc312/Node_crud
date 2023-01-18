import { Router } from "express";
// import {
//   crearPhoto,
//   getPhotos,
//   getPhotoId,
//   updatePhoto,
//   deletePhoto,
// } from "../controllers/photo.controller.js";
// import multer from "../libs/multer.js";

const router = Router();

//
router.get('/', (req, res) => {
    res.render('index.ejs')
});

router.post('/upload', (req, res) => {
    console.log(req.file);
    res.send('uploaded file')
});

// router.route("/photos").post(multer.single("image"), crearPhoto).get(getPhotos);
// router.route("/photos/:id", getPhotoId)
// .put(updatePhoto)
// .delete(deletePhoto);

export default router;
