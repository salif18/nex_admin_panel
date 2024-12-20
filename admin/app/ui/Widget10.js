"use client"
import React from 'react'

const GrosAcheteur = ({grosAcheteurs}) => {
  return (
    <article className='widget7'>
      <section className='title-row'>
        <h1>Les gros acheteurs</h1>
        {/* <LeaderboardIcon className='icon' /> */}
      </section>

      <section className='widget7-article'>
        <ul>
          {
            grosAcheteurs?.map((element) =>

              <li key={element._id}>
                <article>
            
                  <section className='row'>
                    <section className='column'>
                      <h2>{element.name} </h2>
                      <p>{element.email}</p>
                      <p className='nombre'>Valeurs d'achats {element.sommeRendu} Fcfa</p>
                    </section>
                  
                  </section>
                </article>
              </li>
            )
          }
        </ul>
      </section>
    </article>
  )
}

export default GrosAcheteur
