"use client"
import React, { useState } from 'react'

const CreateLivreur = () => {

    //LIST DES SELECTION CATEGORIE
    const roles = [
        { id: 1, role: "admin" },
        { id: 2, role: "client" },
        { id: 3, role: "delivery" }
    ]

    const [livreur, setLivreur] = useState({ name: "", numero: null, email: "", role: "", password: "" })
    const [messageEmpty, setMessageEmpty] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setLivreur({ ...livreur, [name]: value })
        setMessageEmpty("") // Réinitialiser le message d'erreur après un changement
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (livreur.name.length > 0 && livreur.numero && livreur.email.length > 0 && livreur.role.length > 0 && livreur.password.length > 0) {


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
        <main className='add-livreur'>
            <section className='title'>
                <h2>Inscrir de nouveaux livreur</h2>
            </section>
            <form className='form' onSubmit={handleSubmit}>

                <section className='form-field'>
                    <label className='label' htmlFor='name'>Nom</label>
                    <input type='text' name="name" value={livreur.name} onChange={handleChange} placeholder='nom du livreur...' />
                    {messageEmpty && livreur.name.length <= 0 ? <span>{messageEmpty}</span> : null}
                </section>

                <section className='form-field'>
                    <label className='label' htmlFor='numero'>Telephone</label>
                    <input type='number' name="numero" value={livreur.numero} onChange={handleChange} placeholder='numero du livreur...' />
                    {messageEmpty && livreur.numero.length <= 0 ? <span>{messageEmpty}</span> : null}
                </section>
                <section className='form-field'>
                    <label className='label' htmlFor='email'>Email</label>
                    <input type='email' name="email" value={livreur.email} onChange={handleChange} placeholder='email du livreur...' />
                    {messageEmpty && livreur.email.length <= 0 ? <span>{messageEmpty}</span> : null}
                </section>

                <section className='form-field'>
                    <label className='label' htmlFor='role'>Role</label>
                    <select name='role' value={livreur.role} onChange={handleChange}>
                        <option value=''>default</option>
                        {
                            roles.map((role) =>
                                <option key={role.id} value={role.role}>{role.role}</option>
                            )
                        }
                    </select>
                    {messageEmpty && livreur.role.length <= 0 ? <span>{messageEmpty}</span> : null}
                </section>

                <section className='form-field'>
                    <label className='label' htmlFor='password'>Password</label>
                    <input type='text' name="password" value={livreur.password} onChange={handleChange} placeholder='mot de passe par default ...' />
                    {messageEmpty && livreur.password.length <= 0 ? <span>{messageEmpty}</span> : null}
                </section>
                <section>
                    <button className='btn-add' type='submit'>Inscrir</button>
                </section>
            </form>
        </main>
    )
}

export default CreateLivreur