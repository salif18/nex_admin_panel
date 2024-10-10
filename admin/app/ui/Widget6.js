
import React from 'react'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
const Widget6 = () => {

  const stockEnd = [
    {
      id:1,
      name:"Nivea",
      img: "https://ma.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/82/461016/1.jpg?4084",
      categorie:"Parfum",
      stock:0
    },
    {
      id:2,
      name:"Nivea",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GjBjJVJcaf9oloAoWNCSEVS-HbjNHKaQBQ&s",
      categorie:'Lait',
      stock:0
    }
  ]
  return (
    <article className='widget6'>
      <section className='title-row'>
         <h1>Les produits en finition</h1>
      <TrendingDownIcon className='icon' />
      </section>
     
      <section className='widget6-article'>
       <ul>
        {
          stockEnd.map((element)=>
            
              <li key={element.id}>
                <article>
                  <figure>
                    <img className='img' src={element.img} style={{width:50, height:50}} alt="" />
                  </figure>
                  <section className='row'>
                    <section className='column'>
                    <h2>{element.name} </h2>
                    <p>{element.categorie}</p>
                    </section>
                    <section className='stock'>
                    <p>restant</p>
                    <p className='rest'>{element.stock}</p>
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

export default Widget6
