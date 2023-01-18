// import app from "../app.js";
// import { Photo } from "../models/Photo.js";

// ////////////// Metodo GET Photo ////////////////
// app.get('/', (req, res) => {
//   res.render('index.ejs')
// })







// // export const getPhotos = async(req, res) => {
// //       try {
// //         const photos = await Photo.findAll();
// //       res.json(photos);
      
// //       } catch (error) {
// //         return res.status(500).json({ message: error.messages});
// //       }
// // } 

// // ////////////// metodo GET Photo ID ////////////////
// // export const getPhotoId = async(req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const photo = await Photo.findOne({
// //             where: {
// //                 id,
// //             },
// //         });

// //         if (!photo) 
// //         return res.status(404).json({ message: 'Photo not found' });

// //         res.json(photo);
        
// //     } catch (error) {
// //         return res.status(500).json({ message: error.message});
// //     }
// // }

// // ///////////// Metodod POST Photo /////////////////////////
// // export const crearPhoto = async (req, res) => {
// //     const { title, description } = req.body;
// //   try {
// //       const newPhoto = await Photo.create({
// //         title,
// //         description,
// //         imagenPath: req.file.path,
// //       });
      
// //       res.json({
// //         message: 'Photo created successfully',
// //         newPhoto
// //       });
// //     } catch (error) {
// //       return res.status(500).json({ message: error.message });
// //     }
// //   };

// // //////////// Metodo PUT Photo ///////////////
// // export async function updatePhoto(req, res) {
// //     const { id } = req.params;
// //     const { title, description } = req.body;
// //     const updatedPhoto = await Photo.find(id, {
// //         title,
// //         description
// //     });
// //     return res.json({
// //         message: 'Successfully updated',
// //         updatedPhoto
// //     });
// // }
// // ///////////// Metodo DELETE Photo ///////////////
// // export const deletePhoto = async (req, res) => {
// //     const { id } = req.params;
 
// //    try {
// //     const results = await Photo.destroy({
// //         where: { id },
// //       });
  
// //      console.log(results);
// //      return res.sendStatus(204)

// //    } catch (error) {
// //      return res.status(500).json({ message: error.message });
// //    }
// // };