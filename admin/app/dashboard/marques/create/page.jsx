"use client"
import React, { useState } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const CreateMark = () => {
    const [imagePreview, setImagePreview] = useState(null);
    return (
        <main className='add-options'>
            {/* entete de la page */}
            <section className='title'>
                <h2>Ajouter des marques</h2>
            </section>
            {/* fin entete */}
            {/* formulaire dajout */}
            <form className='form'>
                <section className='form-field'>
                    <label className='file-label' htmlFor='product-picture'>
                        <InsertPhotoIcon style={{ fontSize: 30, color: "green" }} />
                        <span>Ajouter Image du produit </span>
                        <section className='gallery-previews'>
                            {imagePreview && <img src={imagePreview} alt="Aperçu de l'image principale" width="100" />}
                        </section>
                    </label>
                    <input id='product-picture' type="file" name="image" onChange="" />

                </section>
                <section className='form-field'>
                    <label htmlFor='nom'>Nom</label>
                    <input type="text" name="nom" placeholder='nom de la categorie' />
                </section>

                <button className='btn-add' type='submit' >Enregistrer</button>
            </form>
        </main>
    )
}

export default CreateMark