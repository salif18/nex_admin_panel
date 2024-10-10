import mongoose from "../db";
import { NextResponse } from "next/server";
import Products from "../models/product";

// Désactiver le bodyParser intégré de Next.js
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

export const POST = async (req) => {
    try {
        
        const data = await req.json();

        const product = new Products({
            ...data
        })

        // Utilisation de multer pour traiter les fichiers
        // const uploadMiddleware = upload.fields([{ name: 'image' }, { name: 'galeries' }]);

        // const processRequest = () => {
        //     return new Promise((resolve, reject) => {
        //         uploadMiddleware(req, {}, (err) => {
        //             if (err) {
        //                 reject(err);
        //             } else {
        //                 resolve(req);
        //             }
        //         });
        //     });
        // };

        // // Traitement des fichiers et des données
        // const processedRequest = await processRequest();
        // const data = processedRequest.body; // Données non-fichiers
        // const files = processedRequest.files || {}; // Assurez-vous que files est défini

        // // Manipulation des fichiers
        // const image = files.image ? files.image[0] : null;
        // const galeries = files.galeries || [];

        // if (!image) {
        //     throw new Error('Image file is missing.');
        // }

        // const imageUrl = `${req.headers.origin}/images/${image.filename}`;
        // const galeriesPath = galeries.map((file) =>
        //     `${req.headers.origin}/images/${file.filename}`
        // );

        // // Créer un nouvel objet produit
        // const product = new Product({ 
        //     ...data, 
        //     image: imageUrl, 
        //     galeries: galeriesPath 
        // });

        // Sauvegarder le produit dans la base de données
        await product.save();

        // Retourner une réponse JSON avec le produit créé
        return NextResponse.json({ message: "Produit créé avec succès", product }, { status: 201 });

    } catch (err) {
        // Gestion des erreurs
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
};
