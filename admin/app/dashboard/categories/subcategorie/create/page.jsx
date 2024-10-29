import React from 'react'

const CreateSubCategorie = () => {
  return (
    <main className='add-options'>
    {/* entete de la page */}
        <section className='title'>
       <h2>Ajouter de sous categories</h2>
     </section>
     {/* fin entete */}
     {/* formulaire dajout */}
     <form className='form'>
       <section className='form-field'>
        <label htmlFor='nom'>Nom</label>
        <input type="text" name="nom" placeholder='nom de la categorie' />
       </section>

       <button className='btn-add' type='submit' >Enregistrer</button>
     </form>
    </main>
  )
}

export default CreateSubCategorie
