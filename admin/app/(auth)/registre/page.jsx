"use client"

import React, { useState } from 'react'

const Registre = () => {
  const [formData, setFormData] = useState({
    photo: "",
    prenom: "",
    nom: "",
    numero: "",
    email: "",
    categories: "",
    hobbies: [],
    sexe: "",
    password: ""
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]  // Ajoute l'élément coché au tableau
          : prev.hobbies.filter(hobby => hobby !== value) // Retire l'élément décoché
      }));
    } else if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Faites quelque chose avec les données ici
  };
  return (
    <main className='registre'>
      <form className='myForm' onSubmit={handleSubmit}>
        <section>
          <label htmlFor='myPicture'>Photo</label>
          <input id='myPicture' type='file' name='photo' accept='*' onChange={handleChange} />
        </section>
        <section className='section-left'>
          <label htmlFor='myPrenom' >Prénom</label>
          <input id='myPrenom' type='text' name="prenom" value={formData.prenom} onChange={handleChange} required placeholder='votre prénom' />
          <label htmlFor='myNom' >Nom</label>
          <input id='myNom' type='text' name="nom" value={formData.nom} onChange={handleChange} required placeholder='votre nom' />
          <label htmlFor='myNum' >Numero</label>
          <input id='myNum' type='tel' name="numero" value={formData.numero} onChange={handleChange} required placeholder='votre numero' />
          <label htmlFor='myEmail' >Email</label>
          <input id='myEmail' type='email' name="email" value={formData.email} onChange={handleChange} required placeholder='votre email' />
          <label htmlFor='myCatego'>Categories</label>
          <select id='myCatego' name='categories' value={formData.categories} onChange={handleChange} >
            <option value="html"> HTML</option>
            <option value="css">CSS</option>
            <option value="javaScript">JavaScript</option>
          </select>
        </section>
        <section className='section-rigth'>
          <label htmlFor='myMusic'>Music</label>
          <input id='myMusic' type='checkbox' name='hobbies' value="music" onChange={handleChange} />
          <label htmlFor='myLecture'>Lecture</label>
          <input id='myLecture' type='checkbox' name='hobbies' value="lecture" onChange={handleChange} />
          <label htmlFor='myHomme'>Homme</label>
          <input id='myHomme' type='radio' name='sexe' value="homme" onChange={handleChange} />
          <label htmlFor='myFemme'>Femme</label>
          <input id='myFemme' type='radio' name='sexe' value="femme" onChange={handleChange} />
          <label htmlFor='myPass'>Password</label>
          <input id='myPass' type='password' name='password' value={formData.password} onChange={handleChange} required placeholder='Votre mot de passe' />
        </section>
        <button type='submit'> Envoyer</button>
      </form>
    </main>
  )
}

export default Registre
