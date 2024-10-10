"use client"
import React, { useState } from 'react'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibraryOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import axios from 'axios';
const AddProduct = () => {

  //LIST DES SELECTION CATEGORIE
  const categories = [
    { id: 1, name: "lait" },
    { id: 2, name: "crème" },
    { id: 3, name: "pommade" }
  ]

  const [article, setArticle] = useState({ name: "", categorie: "", desc: "", prix: "", stocks: "" })
  const [messageEmpty, setMessageEmpty] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setArticle({ ...article, [name]: value })
    setMessageEmpty("") // Réinitialiser le message d'erreur après un changement
  }

  const handleImagePicked = (e) => {
    const file = e.target.files[0]
    setArticle({ ...article, image: file })
    setMessageEmpty("") // Réinitialiser le message d'erreur après un changement
  }

  const handleMultiPicked = (e) => {
    const files = Array.from(e.target.files)
    setArticle({ ...article, galeries: files })
    setMessageEmpty("") // Réinitialiser le message d'erreur après un changement
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (article.name.length > 0 && article.categorie.length > 0 && article.desc.length > 0 && article.prix.length > 0 && article.stocks.length > 0) {
      // const formData = new FormData()
      // formData.append("image", article.image)
      // article.galeries.forEach((image, index) => formData.append(`galeries[${index}]`, image))
      // formData.append("name", article.name)
      // formData.append("categorie", article.categorie)
      // formData.append("desc", article.desc)
      // formData.append("prix", article.prix)
      // formData.append("stocks", article.stocks)
      
      try {
        console.log(article)
        // Envoyer formData vers votre serveur API
        const res = await axios.post("/api/products",article)
        if(res){
          await res.data;
          console.log(res.data.message);
          setArticle({
            name:"",categorie:"",desc:"",prix:"",stocks:""
          })
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      setMessageEmpty("Veuillez remplir tous les champs obligatoires");
    }
  }

  return (
    <main className='add-prod'>
      <section className='title'>
        <h2>Ajouter de nouveaux stocks</h2>
      </section>
      <form className='form' onSubmit={handleSubmit}>
        <section className='pictures-form'>
          <section className='form-field'>
            <label className='label' htmlFor='name'>Nom</label>
            <input type='text' name="name" value={article.name} onChange={handleChange} placeholder='nom du produit...' />
            {messageEmpty && article.name.length <= 0 ? <span>{messageEmpty}</span> : null}
          </section>
          {/* <section className='form-file'>
            <label className='label' htmlFor='upload-image'><AddPhotoAlternateIcon style={{ fontSize: 80, marginRight: 20 }} /> Ajouter de photo </label>
            <input type='file' id='upload-image' name="image" accept='image/*' onChange={handleImagePicked} placeholder='image...' />
            {messageEmpty && !article.image ? <span>{messageEmpty}</span> : null}
          </section>
          <section className='form-file'>
            <label className='label' htmlFor='upload-multi-image'><PhotoLibraryIcon style={{ fontSize: 80, marginRight: 20 }} />Selection pour galleries</label>
            <input type='file' id='upload-multi-image' multiple accept='image/*' onChange={handleMultiPicked} placeholder='image...' />
            {messageEmpty && article.galeries.length === 0 ? <span>{messageEmpty}</span> : null}
          </section> */}
        </section>

        <section className='form-field'>
          <label className='label' htmlFor='categorie'>Categorie</label>
          <select name='categorie' value={article.categorie} onChange={handleChange}>
            <option value=''>default</option>
            {
              categories.map((categorie) =>
                <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
              )
            }
          </select>
          {messageEmpty && article.categorie.length <= 0 ? <span>{messageEmpty}</span> : null}
        </section>
        <section className='form-field'>
          <label className='label' htmlFor='desc'>Description</label>
          <input type='text' name="desc" value={article.desc} onChange={handleChange} placeholder='description du produit...' />
          {messageEmpty && article.desc.length <= 0 ? <span>{messageEmpty}</span> : null}
        </section>
        <section className='form-field'>
          <label className='label' htmlFor='prix'>Prix</label>
          <input type='number' name="prix" value={article.prix} onChange={handleChange} placeholder='prix du produit...' />
          {messageEmpty && article.prix.length <= 0 ? <span>{messageEmpty}</span> : null}
        </section>
        <section className='form-field'>
          <label className='label' htmlFor='stocks'>Stocks</label>
          <input type='number' name="stocks" value={article.stocks} onChange={handleChange} placeholder='stock du produit...' />
          {messageEmpty && article.stocks.length <= 0 ? <span>{messageEmpty}</span> : null}
        </section>
        <section>
          <button className='btn-add' type='submit'>Ajouter</button>
        </section>
      </form>
    </main>
  )
}

export default AddProduct