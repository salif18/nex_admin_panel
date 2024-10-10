"use client"
import React, { useState } from 'react'

const AddProduct = () => {
  //DEFINIR LES CHAMPS DU FORMULAIRE PRODUIT
  const [article, setArticle ] = useState({name:"",image:"",categorie:"",desc:"",prix:"",stocks:""})

  const handleChange = (e)=>{
    const {name , value } = e.target
    setArticle({...article , [name]:value})
  }
  const categories = [
    {id:1,name:"lait"},
    {id:2,name:"crème"},
    {id:3,name:"pommade"}
  ]
  return (
    <main className='add-prod'>
     <section className='title'>
       <h2>Ajouter de nouveaux produits</h2>
     </section>
          <form className='form'>
            <section className='form-field'>
                <label className='label' htmlFor='name'>Nom</label>
                <input type='text' name="name" value={article.name} onChange={handleChange} placeholder='nom du produit...' />
            </section>
            <section className='form-field'>
                <label className='label' htmlFor='name'>Nom</label>
                <input type='file' name="image" value={article.image} onChange={handleChange} placeholder='image...' />
            </section>
            <section className='form-field'>
                <label className='label' htmlFor='categorie'>Categorie</label>
                <select type="text" name='categories' value={article.categorie} onChange={handleChange}>
                  <option>select-categorie</option>
                  {
                    categories.map((categorie)=>
                    <option key={categorie.id} value={categorie.name}> {categorie.name}</option>
                    )
                  }
                </select>
            </section>
            <section className='form-field'>
                <label className='label' htmlFor='desc'>Description</label>
                <input type='text' name="desc" onChange={article.desc} placeholder='description du produit...' />
            </section>
            <section className='form-field'>
                <label className='label' htmlFor='prix'>Prix</label>
                <input type='number' name="prix" value={article.prix} onChange={handleChange} placeholder='prix du produit...' />
            </section>
            <section className='form-field'>
                <label className='label' htmlFor='stock'>Stocks</label>
                <input type='number' name="stocks" value={article.stocks} onChange={handleChange} placeholder='stock du produit...' />
            </section>
          </form>
    </main>
  )
}

export default AddProduct