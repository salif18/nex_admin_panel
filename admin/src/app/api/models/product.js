import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // image: { type: String, required: true },
    categorie: { type: String, required: true },
    desc: { type: String, required: true },
    prix: { type: String, required: true },
    stocks: { type: String, required: true }
},{timestamps:true});

// Vérifiez si le modèle existe déjà
const Products = mongoose.models.Products || mongoose.model('Products', productSchema);

export default Products;