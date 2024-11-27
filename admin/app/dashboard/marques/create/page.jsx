"use client"
import React, { useEffect, useState } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import axios from 'axios';

const CreateMark = () => {
 const [formData ,  setFormData]= useState({
    name:"",
    image:""
 })
 const [isValid, setIsValid] = useState(true);
 const [message , setMessage ] = useState("")
 const [reponseServer, setReponseServer] = useState("");

 const handleChange =(e)=>{
    const {name , value } = e.target;
    setFormData({...formData , [name] : value})
 }

 const handleSubmit =async(e)=>{

    e.preventDefault();
        // Validation des champs
        if (!formData.name || !formData.image) {
            setIsValid(false); // Affichez un message d'erreur à l'utilisateur
            setReponseServer("Veuillez remplir les champs!")
            return;

        }
    try{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_URI}/marques`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer `,
            },
        });
        if (response.status === 201) {
           
            setReponseServer(response?.data?.message)
            // Réinitialiser les champs après l'envoi
            setFormData({
                name:"",
                image:""
            });
        }

    }catch(e){
        setReponseServer(e.response.data.message)
    }
 }

 
 useEffect(() => {
    if (reponseServer) {
        const timer = setTimeout(() => setReponseServer(""), 3000)
        return () => clearTimeout(timer)
    }
}, [reponseServer])
    return (
        <main className='add-options'>
            {/* entete de la page */}
            <section className='title'>
                <h2>Ajouter des marques</h2>
            </section>
            {/* fin entete */}
            {/* formulaire dajout */}
            <form className='form' onSubmit={handleSubmit}>
                <section className='form-field'>
                    <label className='file-label' htmlFor='product-picture'>
                        {/* <InsertPhotoIcon style={{ fontSize: 30, color: "green" }} /> */}
                        <span>Image</span>
                        {/* <section className='gallery-previews'>
                            {imagePreview && <img src={imagePreview} alt="Aperçu de l'image principale" width="100" />}
                        </section> */}
                    </label>
                    <input id='product-picture' type="text" name="image" value={formData.image} onChange={handleChange} />

                </section>
                <section className='form-field'>
                    <label htmlFor='nom'>Nom</label>
                    <input type="text" name="name" value={formData.name}  onChange={handleChange} placeholder='nom de la categorie' />
                </section>

                <button className='btn-add' type='submit' >{reponseServer || "Enregistrer"}</button>
            </form>
        </main>
    )
}

export default CreateMark