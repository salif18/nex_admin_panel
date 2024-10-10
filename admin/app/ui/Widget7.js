import React from 'react'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Groups2Icon from '@mui/icons-material/Groups2';
const Widget7 = () => {

  const stockEnd = [
    {
      id: 1,
      name: "Nivea",
      img: "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/461016/1.jpg?4084",
      categorie: "Parfum",
      achat: 101
    },
    {
      id: 2,
      name: "Nivea",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GjBjJVJcaf9oloAoWNCSEVS-HbjNHKaQBQ&s",
      categorie: 'Lait',
      achat: 150
    }
  ]
  
  return (
    <article className='widget7'>
      <section className='title-row'>
        <h1>Les plus achetés</h1>
        <LeaderboardIcon className='icon' />
      </section>

      <section className='widget7-article'>
        <ul>
          {
            stockEnd.map((element) =>

              <li key={element.id}>
                <article>
                  <figure>
                    <img className='img' src={element.img} style={{ width: 50, height: 50 }} alt="" />
                  </figure>
                  <section className='row'>
                    <section className='column'>
                      <h2>{element.name} </h2>
                      <p>{element.categorie}</p>
                    </section>
                    <section className='achat'>
                      <SignalCellularAltIcon className='icon-blue' />
                      <Groups2Icon className='icon' />
                      <p className='nombre'>{element.achat}</p>
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
