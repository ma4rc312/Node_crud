// import app from "../app.js";
 import { Photo } from "../models/Photo.js";
//  import path from "path"
// ////////////// Metodo GET Photo ////////////////
export const getPhotos = async (req, res) => {
     res.render('index.ejs')
}

// // ///////////// Metodod POST Photo /////////////////////////
//  export const crearPhoto = async (req, res) => {
//     console.log(req.file);
//     res.send('upload Photo')
//  }

export const crearPhoto = async (req, res) => {
    const { title, description } = req.body;
       
    // comsole.log(req.file)
    const newImage = {
        title,
        description,
        imagenPath: req.file
    };

    const photo = new Photo(newImage);
    await photo.save();
    await res.json({
        message: 'Photo saved successfully',
        photo
    })

}


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