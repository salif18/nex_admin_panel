"use client"
import React, { useState } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CollectionsIcon from '@mui/icons-material/Collections';

const AddProduct = () => {
  //DEFINIR LES CHAMPS DU FORMULAIRE PRODUIT
  const [formData, setFormData] = useState({
    name: '',
    img: null,
    gallery: [],
    category: '',
    subcategory: '',
    marque:"",
    rating: "0",
    stock: "",
    price: "",
    description: '',
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [galleryPreviews, setGalleryPreviews] = useState([]);
 const [error, setError] = useState('');

 const handleChange = (e) => {
  const { name, value, type, files } = e.target;

  if (type === 'file') {
    if (name === 'gallery') {
      // Limiter à 3 fichiers pour la galerie
      if (files.length > 3) {
        setError("Vous pouvez sélectionner jusqu'à 3 images pour la galerie.");
        return;
      }
      setError('');
      setFormData((prevData) => ({
        ...prevData,
        [name]: Array.from(files),
      }));
        // Mettre à jour les aperçus de la galerie directement avec les nouveaux fichiers
        setGalleryPreviews(Array.from(files).map((file) => URL.createObjectURL(file)));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
      setImagePreview(URL.createObjectURL(files[0]));
    }
  } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
};
   const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('image', formData.img);
    formData.gallery.forEach((file, index) => data.append(`gallery[${index}]`, file));
    data.append('category', formData.category);
    data.append('subcategory', formData.subcategory);
    data.append('rating', formData.rating);
    data.append('stock', formData.stock);
    data.append('price', formData.price);
    data.append('description', formData.description);

    try {
      const response = await axios.post('/api/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Produit ajouté avec succès:', response.data);
    } catch (error) {
      console.error("Erreur lors de l'ajout du produit:", error);
    }
  };

  const categories = [
    {id:1,name:"Accessoires"},
    {id:2,name:"Vetements"},
    {id:3,name:"Chaussures"}
  ]

  const sousCategories = [
    {id:1,name:"Enfants"},
    {id:2,name:"Femmes"},
    {id:3,name:"Hommes"}
  ]
  
  
  return (
    <main className='add-prod'>
     <section className='title'>
       <h2>Ajouter de nouveaux produits</h2>
     </section>
          <form className='form'>
          <section className='form-left'>
            <section className='form-field'>
                <label className='label' htmlFor='name'>Nom</label>
                <input id='name' type="text" name="name" value={formData.name} onChange={handleChange} placeholder='name' />
            </section>
            <section className='form-field'>
                <label className='file-label' htmlFor='product-picture'>
                <InsertPhotoIcon style={{ fontSize: 30 ,color:"green" }}/> 
                  <span>Ajouter Image du produit </span>
                  <section className='gallery-previews'>
                 {imagePreview && <img src={imagePreview} alt="Aperçu de l'image principale" width="100" />}
              </section>
                </label>
                 <input id='product-picture' type="file" name="image" onChange={handleChange} />
                
            </section>
            <section className='form-field'>
                <label className='file-label' htmlFor='gallery-picture'>
                 <CollectionsIcon style={{ fontSize: 30, color:"red" }} /> 
                 <span>Ajouter Gallerie d'image du produit</span>
                 <section className='gallery-previews'>
              {galleryPreviews.map((src, index) => (
                <img key={index} src={src} alt={`Aperçu galerie ${index + 1}`} width="100" />
              ))}
            </section>
                 </label>
                 <input id='gallery-picture' type="file" name="gallery" multiple onChange={handleChange} />
             
        {error && <p style={{ color: 'red' }}>{error}</p>}
            </section>
            <section className='form-field'>
                <label className='label' htmlFor='category'>Categorie</label>
                <select id='category' type="text" name='category' value={formData.category} onChange={handleChange}>
                  <option>select-categorie</option>
                  {
                    categories.map((categorie)=>
                    <option key={categorie.id} value={categorie.name}> {categorie.name}</option>
                    )
                  }
                </select>
            </section>
            <section className='form-field'>
                <label className='label' htmlFor='subcategory'>Sous-categorie</label>
                <select id='subcategory' type="text" name='subcategory' value={formData.subcategory} onChange={handleChange}>
                  <option>select-categorie</option>
                  {
                    sousCategories.map((categorie)=>
                    <option key={categorie.id} value={categorie.name}> {categorie.name}</option>
                    )
                  }
                </select>
            </section>
            </section>
            <section className='form-rigth'>
            <section className='form-field'>
                <label className='label' htmlFor='marque'>Marque</label>
                <input id='marque' type="text" name='marque' value={formData.marque} onChange={handleChange} placeholder='la marque'/>
            </section>
            <section className='form-field'>
                <label className='label' htmlFor='desc'>Description</label>
                <input id='desc' type='text' name="description" onChange={formData.description} placeholder='description du produit...' />
            </section>
            <section className='form-field'>
                <label className='label' htmlFor='prix'>Prix</label>
                <input id='prix' type='number' name="price" value={formData.price} onChange={handleChange} placeholder='prix du produit...' />
            </section>
            <section className='form-field'>
                <label className='label' htmlFor='stock'>Stocks</label>
                <input id='stock' type='number' name="stock" value={formData.stock} onChange={handleChange} placeholder='stock du produit...' />
            </section>
            <button className='btn-save-new'>Enregistrer</button>
            </section>
          </form>
    </main>
  )
}

export default AddProduct