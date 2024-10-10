"use client"
import React, { useState } from 'react'


const create = () => {
   
  const [categorie, setCategorie] = useState({ categorie_name: "" })
  const [messageEmpty, setMessageEmpty] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setCategorie({ ...categorie, [name]: value })
    setMessageEmpty("") // Réinitialiser le message d'erreur après un changement
  }

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categorie.categorie_name.length > 0) {
     
      try {
        // Envoyer formData vers votre serveur API
      } catch (err) {
        console.log(err)
      }
    } else {
      setMessageEmpty("Veuillez remplir tous les champs obligatoires");
    }
  }

  return (
    <main className='create-categorie'>
      <section className='title'>
        <h2>Créer de nouveaux categorie</h2>
      </section>
      <form className='form' onSubmit={handleSubmit}>

        <section className='form-field'>
          <label className='label' htmlFor='categorie_name'>Categorie</label>
          <input type='text' name="categorie_name" value={categorie.categorie_name} onChange={handleChange} placeholder='nom du categorie...' />
          {messageEmpty && categorie.categorie_name.length <= 0 ? <span>{messageEmpty}</span> : null}
        </section>
        <section>
          <button className='btn-add' type='submit'>Créer</button>
        </section>
      </form>
    </main>
  )
}

export default create