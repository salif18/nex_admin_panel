import React from 'react'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Groups2Icon from '@mui/icons-material/Groups2';

const Widget7 = ({produits}) => {

  
  return (
    <article className='widget7'>
      <section className='title-row'>
        <h1>Les plus achetés</h1>
        <LeaderboardIcon className='icon' />
      </section>

      <section className='widget7-article'>
        <ul>
          {
            produits.map((element) =>

              <li key={element._id}>
                <article>
                  <figure>
                    <img className='img' src={element.image} style={{ width: 50, height: 50 }} alt="" />
                  </figure>
                  <section className='row'>
                    <section className='column'>
                      <h2>{element.name} </h2>
                      <p>{element.categorie}</p>
                    </section>
                    <section className='achat'>
                      <Groups2Icon className='icon' />
                      <p className='nombre'>{element.totalQuantity}</p>
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

export default Widget7
