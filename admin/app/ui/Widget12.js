"use client "
import React from 'react'
import { AiOutlineUserSwitch } from "react-icons/ai";

const UserFidel = ({data}) => {
  
  return (
    <article className='widget7' >
    <section className='title-row'>
      <h1>Les clients fidèles</h1>
      <AiOutlineUserSwitch  className='icon' />
    </section>

    <section className='widget7-article'>
      <ul>
        {
          data.map((element) =>
            <li key={element._id}>
              <article>
               
                <section className='row'>
                  <section className='column'>
                    <h2>{element.name} </h2>
                    <p>{element.email}</p>
                    <p className='nombre'>Nombre d'achats {element.nombreAchat}x</p>
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

export default UserFidel
